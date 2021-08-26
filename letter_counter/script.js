let submitBtn = document.querySelector("button");

document.addEventListener('keypress', lengthCalculator);

function lengthCalculator(kp) {
    console.log(`Key presses = ${kp.code}`)
    let textEntered = document.querySelector("input");
    let textEnteredLength = textEntered.value.length;
    let letterCount = document.querySelector("p");
    letterCount.textContent = `Letter Count: ${textEnteredLength + 1}`;
}
