function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}


function divide(a,b){
    return a/b
}


function multiply(a,b){
    return a*b
}

let prevOp = ''
let prevNum = ''
let displayValue = ''

function operate(prev, operator, current) {
    prev = Number(prev);
    current = Number(current);

    if (operator === "add") {
        return add(prev, current);
    } else if (operator === "subtract") {
        return subtract(prev, current);
    } else if (operator === "divide") {
        return divide(prev, current);
    } else if (operator === "multiply") {
        return multiply(prev, current);
    } else {
        return 'error';
    }
}


let clear = document.getElementById('clear')


let display = document.getElementById('innerDisplayBottomText')
let displayTop = document.getElementById('innerDisplayTopText')


clear.addEventListener('click', () => { // clear all
    displayValue = ''
    display.textContent = 0
    displayTop.textContent = ''
});


document.querySelectorAll('.number').forEach(btn => {
    btn.addEventListener('click', () => {
        displayValue += btn.textContent;
        display.textContent = displayValue
    })
})



document.querySelectorAll('.operator').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == '÷'){
            prevOp = 'divide';
            prevNum = display.textContent
            displayTop.textContent = prevNum + ' ÷ '
            displayValue = '';
        } else if (btn.textContent == 'x'){
            prevOp = 'multiply';
            prevNum = display.textContent
            displayTop.textContent = prevNum + ' x '
            displayValue = '';
        } else if (btn.textContent == '-'){
            prevOp = 'subtract';
            prevNum = display.textContent
            displayTop.textContent = prevNum + ' - '
            displayValue = '';
        } else if (btn.textContent == '+'){
            prevOp = 'add';
            prevNum = display.textContent
            displayTop.textContent = prevNum + ' + '
            displayValue = '';
        }
    })
})



// breakdown
// when button is pressed it shows on screen until clear

// need three input for answer to be outputted to console
// save in the first variable the current number on screen
// when an operator is clicked, it stores the operator type in this script
// it will wait until another number is pressed before running it through the function to get the result
// result is shown on interface once the = is pressed


//                     <button id="clear">CLEAR</button>
//                     <button id="delete">DELETE</button>
//                     <button id="7">7</button>
//                     <button id="8">8</button>
//                     <button id="9">9</button>
//                     <button id="divide">÷</button>
//                     <button id="4">4</button>
//                     <button id="5">5</button>
//                     <button id="6">6</button>
//                     <button id="times">x</button>
//                     <button id="1">1</button>
//                     <button id="2">2</button>
//                     <button id="3">3</button>
//                     <button id="minus">-</button>
//                     <button id="point">.</button>
//                     <button id="0">0</button>
//                     <button id="equals">=</button>           
//                     <button id="plus">+</button>  