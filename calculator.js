// (function () {

"use strict";

// Assigning variable names to buttons
var leftOperand = document.getElementById("left-operand");
var rightOperand = document.getElementById("right-operand");
var operatorVar = document.getElementById("operatorId");
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

// Functionality for the clear button
var clear = function () {
    rightOperand.value = "";
    leftOperand.value = "";
    operatorVar.value = "";
}
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

    var leftValue = leftOperand.value;
    var rightValue = rightOperand.value;

    var result = function () {
        switch (operatorVar.value) {
            case "+":
                result = (parseInt(leftOperand.value) + parseInt(rightOperand.value));
                break;
            case "-":
                result = (parseInt(leftOperand.value) + parseInt(rightOperand.value));
                break;
            case "*":
                result = parseInt(leftOperand.value) * parseInt(rightOperand.value);
                break;
            case "/":
                result = parseInt(leftOperand.value) / parseInt(rightOperand.value);
                break;
        }
        clear();
        leftOperand.value = result;
    }

    btnEqual.addEventListener("click", result, false);

// })();

