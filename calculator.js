(function () {

"use strict";

// Assigning variable names to
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



var leftInput = function(){
    leftOperand.innerHTML += this.innerHTML;
console.log(operatorVar.innerHTML);
}

var middleInput = function(){
    operatorVar.innerHTML = this.innerHTML;
}

var rightInput = function (){
    rightOperand.innerHTML += this.innerHTML;
console.log("false");
}

    for (var i = 0; i < numBtn.length; i++) {
        if(operatorVar.innerText === ""){
            numBtn[i].addEventListener("click", leftInput, false);
        } else {
            numBtn[i].addEventListener("click", rightInput, false);
        }



            // if (operatorVar.innerHTML) {
            //     btn[i].addEventListener("click", rightInput, false);
            // }

        // } else {
        // console.log("Oops..");
        // }
    }

    for (var i = 0; i < operBtn.length; i++) {
        operBtn[i].addEventListener("click", middleInput, false);
    }

})();

