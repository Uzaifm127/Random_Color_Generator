// All Variables
const mainBody = document.getElementById("mainBody");
const button = document.querySelector(".btn");
const colorCode = document.querySelector("#colorCode");

/* for hexadecimal code */
// All Necessary function

// Generate Random Number Function
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorGenerator = () => {
  const randomColorCode = randomNumber(0, 16777215);
  const randomHexaColor = `#${randomColorCode.toString(16)}`;
  colorCode.innerText = randomHexaColor;
  mainBody.style.backgroundColor = randomHexaColor;
  // This code helps to automatic copy the hex code when user clickf
  navigator.clipboard.writeText(randomHexaColor);
};

// if (colorCode.innerText === "") {
//   colorCode.innerText = "#ffffff";
//   mainBody.style.backgroundColor = "#ffffff";
// }

colorGenerator();

button.addEventListener("click", colorGenerator);

/*
--> for rgb color model

if (colorCode.innerText === "") {
  const color = "rgb(250, 128, 114)";
  colorCode.innerText = color;
}

const colorGeneratorRgb = () => {
  const randomGeneratedColor = `rgb(${randomNumber(0, 255)}, ${randomNumber(
    0,
    255
  )}, ${randomNumber(0, 255)})`;

  colorCode.innerText = randomGeneratedColor;
  mainBody.style.backgroundColor = randomGeneratedColor;
};

button.addEventListener("click", colorGeneratorRgb);
*/
