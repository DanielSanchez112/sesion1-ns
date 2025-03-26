"use strict";
//crear un arreglo de usuario
const usersList = [
    {
        id: '001',
        nombre: 'Daniel',
        apellidoP: 'Sanchez',
        password: '',
        tipoUsuario: 'Admin',
        activo: true
    },
    {
        id: '002',
        nombre: 'Ana',
        apellidoP: 'Gomez',
        password: '',
        tipoUsuario: 'User',
        activo: false
    },
    {
        id: '003',
        nombre: 'Carlos',
        apellidoP: 'Lopez',
        password: '',
        tipoUsuario: 'User',
        activo: true
    },
    {
        id: '004',
        nombre: 'María',
        apellidoP: 'Fernandez',
        password: '',
        tipoUsuario: 'User',
        activo: true
    },
    {
        id: '005',
        nombre: 'Luis',
        apellidoP: 'Ramirez',
        password: '',
        tipoUsuario: 'User',
        activo: false
    },
    {
        id: '006',
        nombre: 'Elena',
        apellidoP: 'Torres',
        password: '',
        tipoUsuario: 'User',
        activo: true
    },
    {
        id: '007',
        nombre: 'Javier',
        apellidoP: 'Martinez',
        password: '',
        tipoUsuario: 'User',
        activo: false
    },
    {
        id: '008',
        nombre: 'Sofia',
        apellidoP: 'Hernandez',
        password: '',
        tipoUsuario: 'User',
        activo: true
    },
    {
        id: '009',
        nombre: 'Roberto',
        apellidoP: 'Diaz',
        password: '',
        tipoUsuario: 'User',
        activo: true
    },
    {
        id: '010',
        nombre: 'Gabriela',
        apellidoP: 'Castro',
        password: '',
        tipoUsuario: 'User',
        activo: false
    }
];
// un usuario que no esta esta detro del array
let persona1 = {
    id: '011',
    nombre: 'Harry',
    apellidoP: 'Hernandez',
    password: '',
    tipoUsuario: 'Guest',
    activo: true
};
usersList.push(persona1);
//filtrar usuario que tengan activo 
const usuariosActivos = usersList.filter(user => user.activo);
console.log(usuariosActivos);
