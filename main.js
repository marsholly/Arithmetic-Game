document.addEventListener('DOMContentLoaded', init);

function init(){

  question();

  for(let i = 0; i < 11; i++){
    document.getElementById(i).addEventListener('click', buttonClicked);
  }

  document.getElementById('submit').addEventListener('click', submitClicked);
  document.getElementById('clear').addEventListener('click', clearresult); 

};

function submitClicked(){
  var oper = document.getElementById('operator').textContent;
  let result;
  if(oper === '+'){
    result = sum();
  }else if(oper === '-'){
    result = minus();
  }else if(oper === '*'){
    result = multiply();
  }else{
    result = divide();
  } 

  let val = document.getElementById('result').textContent;     

  if(result === +val){
    setTimeout(function(){
      document.getElementById('message').innerHTML = 'You are right, Good job! '; 
      question();
      clearresult();
    }, 600);
  }else{
      setTimeout(function(){
        document.getElementById('message').innerHTML = 'You are wrong, the answer is ' + result; 
        question();
        clearresult();
      }, 600);
  }
}

let value ='';

function buttonClicked(event){  
  let num = event.target.textContent;
  value += num;
  document.getElementById('result').innerHTML = value;
} 

function sum() {
  let num1 = document.getElementById('number1').textContent;
  let num2 = document.getElementById('number2').textContent;  // num is string.
  let sum = +num1 + +num2;  // +num1 : num become integer.
  return sum;
}

function minus(){
  let num1 = document.getElementById('number1').textContent;
  let num2 = document.getElementById('number2').textContent;  // num is string.
  let minus = +num1 - +num2;  // +num1 : num become integer.
  return minus;
}

function multiply(){
  let num1 = document.getElementById('number1').textContent;
  let num2 = document.getElementById('number2').textContent;  // num is string.
  let multiply = +num1 * +num2;  // +num1 : num become integer.
  return multiply;
}

function divide(){
  let num1 = document.getElementById('number1').textContent;

  let num2 = document.getElementById('number2').textContent;  // num is string.

  let divide =Math.floor( +num1 / +num2 );  // +num1 : num become integer.
  return divide;
}

function clearresult(){
  document.getElementById('result').innerHTML = '';  
  value ='';
}

function question(){

  let num1 = Math.floor(Math.random()* 10);
  document.getElementById('number1').innerHTML = num1;
   
  let num2 = Math.floor(Math.random()* 10);   
  
  operator();
  
  document.getElementById('number2').innerHTML = num2;

}

function operator(){
  let randomNumber = Math.floor(Math.random() * 4 + 1);
  switch(randomNumber){
    case 1: document.getElementById('operator').innerHTML = '+';
            sum();
            break;
    case 2: document.getElementById('operator').innerHTML = '-';
            minus();
            break;
    case 3: document.getElementById('operator').innerHTML = '*';
            multiply();
            break;
    default: document.getElementById('operator').innerHTML = '/';
            num2 = Math.floor(Math.random() * 9 + 1);
            divide();
  }
}
