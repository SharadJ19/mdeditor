const mongoose = require("mongoose");

const markdownFileSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
});

module.exports = mongoose.model("MarkdownFile", markdownFileSchema);
