// Array to store the image URLs
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

// Reference to the image element
const sliderImage = document.getElementById("sliderImage");

// Function to update the image source
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for "Next" button
document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length; // Move to next image, wrap around
    updateImage();
});

// Event listener for "Previous" button
document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous image, wrap around
    updateImage();
});
