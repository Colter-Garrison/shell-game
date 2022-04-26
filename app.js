// import functions and grab DOM elements
const button1 = document.getElementById('shell-1-button');
const button2 = document.getElementById('shell-2-button');
const button3 = document.getElementById('shell-3-button');
// console.log(button1);

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const attempts = document.getElementById('attempts');

let wins = 0;
let losses = 0;

button1.addEventListener('click', () => {
  shell1.classList.remove('reveal');
  shell2.classList.remove('reveal');
  shell3.classList.remove('reveal');

  console.log('clicking button 1')
})
