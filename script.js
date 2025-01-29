let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const paragraph = document.getElementById("fa-paragraph");

// Toggle the visibility of the game rules
function toggleInfo() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

submitBtn.addEventListener("click", function () {
    let userGuess = guessInput.value.trim();

    if (userGuess === "") {
        message.textContent = "Please enter a number!";
        message.style.color = "red";
        return;
    }

    let num = Number(userGuess);

    if (isNaN(num) || num < 1 || num > 100) {
        message.textContent = "Enter a valid number (1-100)";
        message.style.color = "red";
        return;
    }

    attempts++;

    if (num === randomNumber) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        message.style.color = "green";
        submitBtn.disabled = true;
        resetBtn.classList.remove("hidden");
    } else if (num < randomNumber) {
        message.textContent = "📉 Too low! Try again.";
        message.style.color = "blue";
    } else {
        message.textContent = "📈 Too high! Try again.";
        message.style.color = "blue";
    }

    guessInput.value = "";
});

resetBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    guessInput.value = "";
    submitBtn.disabled = false;
    resetBtn.classList.add("hidden");
});