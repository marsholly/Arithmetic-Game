document.addEventListener('DOMContentLoaded', init);

function init(){

  question();

  for(let i = 0; i < 10; i++){
    document.getElementById(i).addEventListener('click', buttonClicked);
  }

  document.getElementById('submit').addEventListener('click', submitClicked);
  document.getElementById('clear').addEventListener('click', clearresult); 

};

function submitClicked(){
  let result = sum();
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

function clearresult(){
  document.getElementById('result').innerHTML = '';  
  value ='';
}

function question(){

    let num1 = Math.floor(Math.random()* 9 + 1);
    document.getElementById('number1').innerHTML = num1;

    let num2 = Math.floor(Math.random()* 9 + 1);
    document.getElementById('number2').innerHTML = num2;

}
