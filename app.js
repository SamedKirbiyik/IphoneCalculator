let acButton = document.querySelector(".ac");
let pmButton = document.getElementsByClassName("pm");
let percentButton = document.querySelector(".percent");
let divisionButton = document.querySelector(".division");
let sevenButton = document.querySelector(".number-7");
let eightButton = document.querySelector(".number-8");
let nineButton = document.querySelector(".number-9");
let multiplicationButton = document.querySelector(".multiplication");
let fourButton = document.querySelector(".number-4");
let fiveButton = document.querySelector(".number-5");
let sixButton = document.querySelector(".number-6");
let subtractionButton = document.querySelector(".subtraction");
let oneButton = document.querySelector(".number-1");
let twoButton = document.querySelector(".number-2");
let threeButton = document.querySelector(".number-3");
let additionButton = document.querySelector(".addition");
let zeroButton = document.querySelector(".number-0");
let decimalButton = document.querySelector(".decimal");
let equalButton = document.querySelector(".equal");

let display = document.querySelector(".display");

let numberArray = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton, 
    sevenButton, eightButton, nineButton];

let getDisplay = () =>{
    let displayStr = display.textContent;
    return displayStr;
}

const handleNumberClick = (strNum) => {
    const displayStr = getDisplay();
    if (displayStr === "0"){
        display.textContent = strNum;
    } 
    else {
        display.textContent = parseFloat(displayStr + strNum).toLocaleString();
    }
}

for (let i=0; i<numberArray.length; i++) {
    let numberEl = numberArray[i];
    numberEl.addEventListener('click', () =>{
        handleNumberClick(i.toString());
    });
}