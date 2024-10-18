// Write JavaScript to change the content of the h1 element when the button is clicked.
// Hint: Use document.getElementById and innerHTML.

document.getElementById("changeTextBtn").addEventListener("click", function() {
    const header = document.getElementById("header");
    
    if (header.innerHTML === "Welcome to the Site") {
        header.innerHTML = "Text Changed";
    } else {
        header.innerHTML = "Welcome to the Site";
    }
});
