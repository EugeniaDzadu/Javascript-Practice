function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the clock's content
    clockElement.textContent = timeString;
}

// Call updateClock once per second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
