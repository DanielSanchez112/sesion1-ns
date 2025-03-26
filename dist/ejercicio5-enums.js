"use strict";
var Rol;
(function (Rol) {
    Rol["Admin"] = "ADMIN";
    Rol["Usuario"] = "USER";
})(Rol || (Rol = {}));
//se crea un array de usuarios
const users = [];
//se crea un usuario teniendo en cuenta que es de tipo User
let rowUser = {
    id: '001',
    name: 'Daniel',
    lastName: 'Sanchez',
    rol: Rol.Usuario, // hace referencia a la enumeracion de hasta arriba
    password: ''
};
users.push(rowUser);
