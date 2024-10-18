document.getElementById("textInput").addEventListener("input", function() {
    const textLength = this.value.length;
    document.getElementById("charCount").textContent = "Characters: " + textLength;
});
