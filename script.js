var display = document.getElementById("display");
var num1 = "";
var num2 = "";
var operator = "";
var displayDiv = document.querySelector("#display");
displayDiv.innerText = "0";
function press(num){
    num1 += num;
    display.innerText = num1;
}
function setOP(key){
    operator = key;
    num2 = num1;
    num1 = "";
}
function clr(){
    num1 = "";
    num2 = "";
    operator = "";
    display.innerText = "0";
}
function calculate(){
    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var result = 0;
    switch(operator){
        case "+":
            result = a + b;
            break;
        case "-":
            result = b - a;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b / a;
            break;
        case "%":
            result = b % a;
            break;
        default:
            result = 0;
    }
    display.innerText = result;
    num1 = result;
    num2 = "";
    operator = "";
}