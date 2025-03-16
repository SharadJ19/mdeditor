const editor = document.getElementById("markdown-editor");
const preview = document.getElementById("markdown-preview");
const fileNameInput = document.getElementById("file-name");

editor.addEventListener("input", () => {
    preview.innerHTML = marked.parse(editor.value);
});

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
