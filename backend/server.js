const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// FORCE LOAD ENV FILE
const envPath = path.join(__dirname, ".env");

if (fs.existsSync(envPath)) {

    const envData = fs.readFileSync(envPath, "utf8");

    envData.split("\n").forEach((line) => {

        const trimmed = line.trim();

        if (trimmed && trimmed.includes("=")) {

            const parts = trimmed.split("=");

            const key = parts[0].trim();

            const value = parts.slice(1).join("=").trim();

            process.env[key] = value;
        }
    });
}

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

console.log("MONGO URI =", process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});