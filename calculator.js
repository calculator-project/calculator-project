// (function () {

"use strict";

// Assigning variable names to buttons
var leftOperand = document.getElementById("left-operand");
var rightOperand = document.getElementById("right-operand");
var operatorVar = document.getElementById("operatorId");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn0 = document.getElementById("btn0");
var btnPlus = document.getElementById("btn-plus");
var btnMinus = document.getElementById("btn-minus");
var btnMultiply = document.getElementById("btn-multiply");
var btnClear = document.getElementById("btn-clear");
var btnEqual = document.getElementById("btn-equal");
var btnDivide = document.getElementById("btn-divide");


var numBtn = document.getElementsByClassName("number");
var operBtn = document.getElementsByClassName("operatorClass");


// Appending numbers to leftOperand
var leftInput = function(btn){
    leftOperand.value += btn.value;
}


var middleInput = function(){
    operatorVar.value = this.value;
}

// Appending numbers to rightOperand
var rightInput = function (btn){
    rightOperand.value += btn.value;
}

var path = function () {
    if (operatorVar.value === "") {
        leftInput (this);
    } else if (leftOperand.value !== "" && operatorVar.value !== "") {
        rightInput (this);
    }
}

var clear = function () {
    rightOperand.innerHTML = "";
    leftOperand.innerHTML = "";
    operatorVar.innerHTML = "";
}
// Functionality for the clear button
    btnClear.addEventListener("click", clear, false);

// Functionality for the operator buttons
    for (var i = 0; i < operBtn.length; i++) {
        operBtn[i].addEventListener("click", middleInput, false);
    }

// Functionality for the number buttons
    for (var i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", path, false);
    }





// Functionality for the equal button



// })();

