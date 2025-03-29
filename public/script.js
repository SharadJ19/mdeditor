// DOM Elements
const editor = document.getElementById("markdown-editor");
const preview = document.getElementById("markdown-preview");
const fileNameInput = document.getElementById("file-name");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Initialize theme from localStorage or default to dark
const savedTheme = localStorage.getItem('markdownEditorTheme') || 'dark';
let isDarkMode = savedTheme === 'dark';

// Apply the current theme
function applyTheme() {
  if (isDarkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('markdownEditorTheme', 'dark');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('markdownEditorTheme', 'light');
  }
}

// Initialize the editor
function initEditor() {
  // Apply initial theme
  applyTheme();

  // Set up markdown editor
  editor.addEventListener("input", () => {
    preview.innerHTML = marked.parse(editor.value);
  });

  // Set up theme toggle
  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    applyTheme();
  });
}

// File operations
async function saveFile() {
  const title = fileNameInput.value;
  const content = editor.value;

  if (!title) return alert("Please enter a file name.");

  const response = await fetch("/api/markdown/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });

  const result = await response.json();
  alert(result.message);
}

async function openFile() {
  const title = fileNameInput.value;

  if (!title) return alert("Please enter a file name.");

  const response = await fetch(`/api/markdown/open/${title}`);
  if (response.ok) {
    const file = await response.json();
    editor.value = file.content;
    preview.innerHTML = marked.parse(file.content);
  } else {
    const result = await response.json();
    alert(result.message);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initEditor);