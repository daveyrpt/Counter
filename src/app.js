// Self Code
/* 
const numberValue = document.querySelector(".numberValue");

const decreaseButton = document.querySelector(".decreaseButton");
const resetButton = document.querySelector(".resetButton");
const increaseButton = document.querySelector(".increaseButton");

let value = 0;

decreaseButton.addEventListener('click', function(){
    value -= 1;
    numberValue.textContent = value;
});

resetButton.addEventListener('click', function(){
    value = 0;
    numberValue.textContent = value;
});

increaseButton.addEventListener('click', function(){
    value += 1;
    numberValue.textContent = value;
});
*/

// Copied Code
let count = 0;

const numberValue = document.querySelector(".numberValue");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        
        const styles = e.currentTarget.classList;
        if (styles.contains("decreaseButton")) {
            count--;
        } else if (styles.contains("increaseButton")) {
            count++;
        } else {
            count = 0;
        }

        // set color based on number
        if (count < 0) {
            numberValue.style.color = "red";
        } 
        if (count > 0) {
            numberValue.style.color = "green";
        } 
        if (count === 0) {
            numberValue.style.color = "black";
        }
        numberValue.textContent = count;
    });
});