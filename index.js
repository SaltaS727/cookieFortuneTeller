// Array of fortunes
const fortunes = [
    "Financial prosperity is on the horizon. Be ready to seize it.",
    "Your kindness and compassion will attract true love into your life.",
    "Laughter is the best medicine. Share it generously.",
    "Your innovative ideas will lead you to great achievements.",
    "A windfall of good fortune is coming your way. Stay open to receive.",
    "Joy is a choice, and today, you choose happiness.",
    "Your dedication and persistence will open new doors of opportunity.",
    "Abundance flows to you effortlessly when you focus on gratitude.",
    "Your hard work will soon pay off and bring you great success.",
    "Simple pleasures bring the greatest joy. Embrace them.",
    "Believe in yourself and all that you are. Success follows.",
    "Adventure is on the horizon.",
    "Happiness is a choice.",
    "You are capable of amazing things.",
];

// References to buttons, image, and fortune text
const predictBtn = document.getElementById("predict-btn");
const copyBtn = document.getElementById("copy-btn");
const newPredictionBtn = document.getElementById("new-prediction-btn");
const cookieImg = document.getElementById("cookie-img");
const fortuneText = document.getElementById("fortune");

// Crack sound
const crackSound = new Audio("cracked.mp3");

// Function to generate a random fortune
function generateFortune() {
    var randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Function to reset the UI
function resetUI() {
    cookieImg.src = "cookie.png"; // Reset cookie to unbroken image
    fortuneText.textContent = "Click the button to open your fortune!"; // Reset fortune text
    predictBtn.style.display = "inline-block"; // Show predict button
    copyBtn.style.display = "none"; // Hide copy button
    newPredictionBtn.style.display = "none"; // Hide new prediction button
}

// Function to show or hide buttons
function toggleButtons(showPredict) {
    if (showPredict) {
        predictBtn.style.display = "inline-block";
        copyBtn.style.display = "none";
        newPredictionBtn.style.display = "none";
    } else {
        predictBtn.style.display = "none";
        copyBtn.style.display = "inline-block";
        newPredictionBtn.style.display = "inline-block";
    }
}

// Event listener for "Open Fortune Cookie" button
predictBtn.addEventListener("click", function() {
    cookieImg.src = "cracked2.png"; // Change to cracked cookie image
    crackSound.play(); // Play crack sound

    // Add shake animation
    cookieImg.classList.add("shake");
    setTimeout(function() {
        cookieImg.classList.remove("shake");
    }, 500); // Remove shake animation after 500ms

    // Show a random fortune and toggle buttons
    fortuneText.textContent = generateFortune();
    toggleButtons(false);
});

// Event listener for "Copy Prediction" button
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(fortuneText.textContent)
        .then(function() {
            alert("Copied: " + fortuneText.textContent);
        })
        .catch(function() {
            alert("Failed to copy. Please try again.");
        });
});
// Event listener for "Get Another Prediction" button
newPredictionBtn.addEventListener("click", resetUI);
