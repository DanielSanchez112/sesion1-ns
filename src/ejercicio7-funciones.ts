// Vanilla JS
// function sumar(num1, num2){
//     return num1 + num2
// }

//TS
function sumar(num1: number, num2: number): number{
    return num1 + num2
}

interface UserResponse extends User{
    _created: Date,
    _updated?: Date | null
}

const mockUser2save: User = {
    id: '',
    name: '',
    lastName: '',
    rol: Rol.Admin,
    password: ''
}

function createUser(userData: User): UserResponse{
    return {
        ...userData,
        _created: new Date()
    }
}

createUser(mockUser2save)