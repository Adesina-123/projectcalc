const userInput = document.getElementById('user-input')
const addBtn = document.getElementById('btn-add');
const minusBtn = document.getElementById('btn-minus');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');



const calculatorOutputResult = document.getElementById('current-results');
const calculatorOutputText = document.getElementById('calculate-result');




function outputResult ( result, text) {

    calculatorOutputResult.textContent = result;
    calculatorOutputText.textContent = text;
}