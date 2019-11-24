// JS читает два. Первый раз собирает переменные и выдиляет память под них. Второй раз выполняет.
// console.log(qwerty);
// qwerty = 3;
// console.log(qwerty);

// hoisting a() is defined
a();
function(){
  console.log('hello');
}

// function expresion b() is undefined
b();
var b = function(){
  console.log('hello');
}

// in browser get event 
document.querySelector('input').onchange = function(e){
  console.log(e.target.value);
}
