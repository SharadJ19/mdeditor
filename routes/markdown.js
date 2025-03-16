const express = require("express");
const router = express.Router();
const MarkdownFile = require("../models/MarkdownFile");

// Save Markdown file
router.post("/save", async (req, res) => {
    try {
        const { title, content } = req.body;
        let file = await MarkdownFile.findOne({ title });
        if (file) {
            file.content = content;
        } else {
            file = new MarkdownFile({ title, content });
        }
        await file.save();
        res.status(200).json({ message: "File saved successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to save file" });
    }
});

// Get Markdown file
router.get("/open/:title", async (req, res) => {
    try {
        const { title } = req.params;
        const file = await MarkdownFile.findOne({ title });
        if (!file) return res.status(404).json({ message: "File not found" });
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: "Failed to open file" });
    }
});

module.exports = router;
