"use strict";
//contrato persona
const usuario = {
    nombre: 'Daniel Enrique',
    apellido: 'Sanchez',
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
    },
    genero: 'Masculino'
};
