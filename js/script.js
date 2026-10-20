const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");

function generateRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        color += characters[randomIndex];
    }
    return color;
}

generateBtn.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    colorBox.style.background = randomColor;
    colorCode.innerText = randomColor;
});