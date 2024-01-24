"use strict";

const firstNum = document.querySelector('#firstNum');
// const selecting = document.querySelector('#selecting');
const secondNum = document.querySelector('#secondNum');
const result = document.querySelector('#result');
const btn = document.querySelector('#btn');
const sumButton = document.getElementById('sum');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');





























btn.addEventListener('click', () => {
    
    selecting.value === "0"  ? alert("Select an Operator"):selecting.value === "+" ? result.innerHTML=Number(firstNum.value) + Number(secondNum.value ): selecting.value === '-' ? result.innerHTML=firstNum.value - secondNum.value
        : selecting.value === '*' ? result.innerHTML=firstNum.value * secondNum.value : result.innerHTML=firstNum.value / secondNum.value
});


