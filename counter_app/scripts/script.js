// Copyright © 2021 All rights reserved. Doga Ege Ozden
let numberArea = document.querySelector("h1");
let increaseButton = document.querySelector(".increase");
let decreaseButton = document.querySelector(".decrease");

let currentNumber = document.querySelector("h1").textContent;
let numberGenerator = parseInt(currentNumber);

increaseButton.onclick = function() {
    numberGenerator += 1;
    numberArea.innerHTML = numberGenerator;
}

decreaseButton.onclick = function () {
    numberGenerator -= 1;
    numberArea.innerHTML = numberGenerator;
}
