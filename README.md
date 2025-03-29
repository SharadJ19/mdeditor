# 🖋️ Markdown Editor with Preview

A full-stack Markdown editor built with **Node.js**, **Express**, **MongoDB**, and vanilla **HTML**, **CSS**, and **JavaScript**. The editor allows real-time Markdown preview, file saving, and loading from a MongoDB database. 🚀

## ✨ Features

- **Real-time Markdown Preview** 👀
- **Save and Open Markdown files** 💾
- **Beautiful Dracula Theme (default)** 🦇
- **Optional Light Mode** ☀️
- **Theme persistence using localStorage** 💾
- **Simple and lightweight implementation** 🪶

## 🎨 Themes

- **Dracula Dark Theme** (default) - Elegant purple/dark color scheme
- **Light Mode** - Clean white theme for daytime use
- **Toggle between themes with one click** 🔄

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Markdown Rendering**: Marked.js

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SharadJ19/mdeditor
   cd mdeditor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB atlas DB or use mine in `.env` file ;>

4. Start the server:

   ```bash
   node server.js
   ```

5. Visit http://localhost:3000 in your browser to start using it 🌐

## 🎯 Usage

### Basic Editor Functions

1. **Write Markdown** in the left panel ✍️

   - All standard Markdown syntax is supported
   - See real-time preview in the right panel

2. **Save Files** 💾

   - Enter a filename in the input field
   - Click "Save" to store in MongoDB

3. **Open Files** 📂
   - Enter the filename you saved previously
   - Click "Open" to load your Markdown

### Theme Customization

1. **Toggle Between Themes** 🔄

   - Click the "Light Mode" button (top-right) to switch to light theme
   - Click "Dark Mode" to return to Dracula theme

2. **Theme Persistence** 💾
   - Your theme preference is automatically saved
   - Will remember your choice when you return

## 📸 Screenshot

![mdeditor](https://github.com/user-attachments/assets/66294992-d465-43f1-a5e9-c067e0addbe5)

Made with ❤️ by [SharadJ19](https://github.com/SharadJ19)
