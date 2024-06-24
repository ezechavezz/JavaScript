// short circuit

//Valores que delvuelven "False"
/*
1) false 
2) 0
3) ''
4) null
5) undefined
6) NaN
*/
let nombre = '';
let userName = nombre || 'Anonimo';
console.log(userName);

function fn1(){
    console.log("Pregunta 1.");
    return false;
}

function fn2(){
    console.log("Pregunta 2.");
    return true;
}

let x = fn1() && fn2;

