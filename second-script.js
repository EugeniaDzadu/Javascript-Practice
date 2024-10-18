// Write JavaScript to toggle a dark-mode class on the body element when the button is clicked.
// Hint: Use classList.toggle. document.body.classList.toggle('dark-mode');

document.getElementById("toggleModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
