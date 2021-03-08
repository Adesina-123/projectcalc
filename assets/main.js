const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];





function getUserInput() { 
    return parseInt(userInput.value)

}
function outputAllCalculation (operator, newResult, enteredNumber) {
    const calculatorDescription = `${newResult} ${operator} ${enteredNumber}`
    outputResult( currentResult,  calculatorDescription)
}
function writeToLog(operator, newResult,enteredNumber,result){
    const logEntry = {
        operator: operator,
        newResult: newResult,
        enteredNumber: enteredNumber,
        result: currentResult

    }
    logEntries.push(logEntry)
    console.log(logEntries)
}
  function calculationResult(calculationType) {

    if(calculationType !== 'ADD'
     && calculationType !== 'SUBTRACT'  && 
     calculationType !== 'MULTIPLY'  &&
     calculationType !== 'DIVIDE') {
        return
    }
    // if (calculationType === 'ADD' || 
    // calculationType === 'SUBTRACT' ||
    //  calculationType === 'MULTIPLY' || 
    //  calculationType === 'DIVIDE') {
        const initialResult = currentResult
        let newInput = getUserInput()
        let mathOperator;
        if(calculationType === 'ADD'){
            currentResult += newInput 
            mathOperator = '+'
        }else if (calculationType === 'SUBTRACT'){
            currentResult -= newInput
            mathOperator = '-'
        
        }else if (calculationType === 'MULTIPLY'){
            currentResult *= newInput
            mathOperator = '*'
        }
        else if (calculationType === 'DIVIDE'){
            currentResult /= newInput
            mathOperator = '/'
        }
    
        outputAllCalculation(mathOperator, initialResult, newInput );
       writeToLog(calculationType, initialResult, newInput);

    //  }
  
  }
function add () {
   calculationResult('ADD')
}
function minus(){
  calculationResult('SUBTRACT')
}
function multiply(){
  calculationResult('MULTIPLY')
}
function divide(){
calculationResult('DIVIDE')
}




addBtn.addEventListener('click', add)
minusBtn.addEventListener('click', minus)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)




// function add () {
//     const outputResult = currentResult + parseInt(userInput.value)
//     const currentResult = initialResult
// }