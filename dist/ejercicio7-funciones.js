"use strict";
// Vanilla JS
// function sumar(num1, num2){
//     return num1 + num2
// }
//TS
function sumar(num1, num2) {
    return num1 + num2;
}
const mockUser2save = {
    id: '',
    name: '',
    lastName: '',
    rol: Rol.Admin,
    password: ''
};
function createUser(userData) {
    return Object.assign(Object.assign({}, userData), { _created: new Date() });
}
createUser(mockUser2save);
