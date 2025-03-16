require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const markdownRoutes = require("./routes/markdown");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/api/markdown", markdownRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB connected, DB -> markdowneditor"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT=3000, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
