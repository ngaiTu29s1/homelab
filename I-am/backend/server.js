import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Đọc profile.json một lần khi khởi động (chuẩn ES module)
let profileData = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const profilePath = path.join(__dirname, "profile.json");
try {
  const raw = fs.readFileSync(profilePath, "utf-8");
  profileData = JSON.parse(raw);
} catch (e) {
  console.warn("[WARN] profile.json not found or invalid, fallback to empty profile.");
  profileData = {};
}

app.get("/api/profile", (req, res) => {
  const data = {
    name: process.env.NAME || "",
    email: profileData.email || process.env.EMAIL || "",
    github: process.env.GITHUB || "",
    linkedin: process.env.LINKEDIN || "",
    website: process.env.WEBSITE || "",
    summary: profileData.summary || "",
    experience: profileData.experience || [],
    education: profileData.education || [],
    projects: profileData.projects || []
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Profile API running on http://localhost:${PORT}`);
});
