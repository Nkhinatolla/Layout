var DISPLAY = getElement("display");
var input = "";
var result = 0;
var operator;
var error = false;
function getElement(id){
  return document.getElementById(id);
}

function toggleNumber(number){
  input += number;
  DISPLAY.innerHTML = input;
  tik();
}
function doOperation(op){
  if(!operator){
    result += input*1;
    input = "";
  }
  else{
    printResult();
  }
  operator = op;
  tik();
}
function clearDisplay() {
  result = 0;
  input = '';
  operator = '';
  DISPLAY.innerHTML = '0';
  tik();
}
function changeChar() {
  input *= -1;
  DISPLAY.innerHTML = input;
  tik();
}
function addDot() {
  input += '.'
  DISPLAY.innerHTML = input;
  tik();
}
function printResult(){
  if(operator == '%') {
    result *= 0.01;
    result *= input;
  }
  else if(operator == '+'){
    result += input*1;
  }
  else if(operator == '-'){
    result -= input*1;
  }
  else if(operator == '*'){
    result *= input*1;
  }
  else if(operator == '/'){
    if(input == '0'){
      error = true;
    }
    else{
      result /= input*1;
    }
  }
  if(error == true) {
    result = 0;
    input = '';
    operator = '';
    error = false;
    DISPLAY.innerHTML = 'error';
  }
  else {
    DISPLAY.innerHTML = result;
  }
  input = "";
  tik();
}
