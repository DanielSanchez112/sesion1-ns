"use strict";
// funcion pura por que no afectara 
function suma2(num1, num2) {
    return num1 + num2;
}
// esto es un side efect
let contador = 0;
// la funcion afecta a un elemento que esta fuera de su funcion
function increamentar() {
    return ++contador;
}
// retorna un 1 pues la fucnion tiene ese proposito
increamentar();
console.log(contador);
