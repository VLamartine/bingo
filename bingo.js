import Table from "./table.js";
import prizes from "./prizes.js";

let numbers;
const chosenNumbers = [];
const table = new Table();

const startGame = () => {
    document.getElementById("welcome-screen").classList.add("none");
    document.getElementById("start-draw").classList.add("none");
    document.getElementById("main-content").classList.remove("none");
    document.getElementById("restart-draw").classList.remove("none");
    document.getElementById("prize-content").classList.add("none");
    setEmptyState();
}

const setEmptyState = () => {
    numbers = Array.from({ length: 75 }, (_, i) => i + 1);
    chosenNumbers.length = 0;
    table.createBoard();
    const image = document.getElementById("number-image");
    image.src = ``;
    image.alt = "Esperando o sorteio...";
    document.getElementById("number").textContent = "--";
}

const chooseNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers[randomIndex];
    addImage(randomNumber);
    table.paintChosenNumber(randomNumber);
    numbers.splice(randomIndex, 1);
    return randomNumber;
}

const drawNumber = () => {
    document.getElementById("number").textContent = chooseNumber();
}

const addImage = (number) => {
    const image = document.getElementById("number-image");
    image.src = `sprites/${number}.png`;
    image.alt = number;
}

const revealPrize = () => {
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[prizeIndex];
    prizes.splice(prizeIndex, 1);
    document.getElementById("prize").textContent = prize;
    document.getElementById("prize-content").classList.remove("none");
    if (prizes.length === 0) {
        document.getElementById("no-more-prizes").classList.remove("none");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-draw").addEventListener("click", startGame);
    document.getElementById("restart-draw").addEventListener("click", setEmptyState);
    document.getElementById("draw-number").addEventListener("click", drawNumber);
    document.getElementById("reveal-prize").addEventListener("click", revealPrize);
});