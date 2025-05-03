const randomNumber = Math.floor(Math.random() * 100) + 1;

const submitButton = document.getElementById("submit");
const guessInput = document.getElementById("guessInput");

const message = document.createElement("p");
message.style.marginTop = "1rem";
message.style.fontWeight = "bold";
message.style.color = "#172c66";
document.querySelector(".game-container").appendChild(message);


submitButton.addEventListener("click", function() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100!";
        message.style.color = "#FF0000"
        return;
    }

    if (guess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed it right: ${randomNumber}`;
        message.style.color = "#006400";
    } else if (guess < randomNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "#1d3557";
    } else {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "#1d3557";
    }

    guessInput.value = "";
});