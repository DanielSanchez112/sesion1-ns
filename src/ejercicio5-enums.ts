enum Rol {
    Admin = "ADMIN",
    Usuario = "USER",
}
 
// se crea una interfaz de usuario
interface User {
    id: string,
    name: string,
    lastName: string,
    rol: Rol,
    password: string,
}

//se crea un array de usuarios
const users: User[] = []



//se crea un usuario teniendo en cuenta que es de tipo User
let rowUser: User = {
    id: '001',
    name: 'Daniel',
    lastName: 'Sanchez',
    rol: Rol.Usuario, // hace referencia a la enumeracion de hasta arriba
    password: ''
}

users.push(rowUser)
