"use strict";
class Usuarios {
    constructor() {
        this.usuarios = [];
        this.usuarios = [];
    }
    // CRUD de usuarios
    //creat user
    createUsuarios(usuarios) {
        const acceso = this.usuarios;
        // generador de id
        const generarId = () => {
            const index = acceso.length + 1;
            return index;
        };
        //validaciones
        if (this.usuarios.find(usuario => usuario.id === usuarios.id) || usuarios.id === null) {
            const newId = generarId();
            usuarios.id = newId;
            console.log(`El id es: ${newId}`);
        }
        if (this.usuarios.find(usuario => usuario.correo === usuarios.correo)) {
            console.log("El correo ya existe");
            return;
        }
        if (this.usuarios.find(usuario => usuario.telefono === usuarios.telefono)) {
            console.log("El telefono ya existe");
            return;
        }
        this.usuarios.push(usuarios);
        console.log("Usuario creado");
        console.log(this.usuarios[this.usuarios.length - 1]);
    }
    //read user
    getUsuarios() {
        if (this.usuarios.length > 0) {
            console.log("Usuarios encontrados");
            console.log(this.usuarios);
            return this.usuarios;
        }
        else {
            console.log("No se encontraron usuarios");
            return null;
        }
    }
    //read One user
    getOneUser(id) {
        if (this.usuarios.find(usuario => usuario.id === id)) {
            console.log(`Usuario con id:${id} encontrado`);
            return this.usuarios.find(usuario => usuario.id === id);
        }
        else {
            return undefined;
        }
    }
    //update user
    updateUser(id, usuario) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            this.usuarios[index] = usuario;
            console.log("Usuario actualizado");
            return this.usuarios[index];
        }
        else {
            console.log("No se encontro el usuario");
        }
    }
    //delete user
    deleteUser(id) {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log("Usuario eliminado");
        }
        else {
            console.log("No se encontro el usuario");
        }
    }
}
//pruebas de la clase Usuarios
const usuarios = new Usuarios();
usuarios.createUsuarios({
    id: null,
    nombre: "Juan",
    edad: 25,
    sexo: "masculino",
    correo: "correo+1@gmail.com",
    contrasena: "123",
    telefono: "1234567890",
    tipoUsuario: "admin",
    estado: "activo",
    fechaCreacion: new Date(),
    fechaActualizacion: null
});
usuarios.createUsuarios({
    id: null,
    nombre: "Manuela",
    edad: 25,
    sexo: "femenino",
    correo: "correo+2@gmail.com",
    contrasena: "123",
    telefono: "1234567891",
    tipoUsuario: "user",
    estado: "activo",
    fechaCreacion: new Date(),
    fechaActualizacion: null
});
usuarios.getUsuarios();
