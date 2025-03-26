//any
function printMessage(message: any): void{
    console.log(message)
}

printMessage('hola mundo')

//uknown
function sumar3(num1: unknown, num2: unknown): number{
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    } else {
        return 0
    }
}

//never
// se refiere a que no debio de haber sucedido esta parte del codigo por lo que 
// tirara un error con el mensaje
function lanzarError(mensaje: string): never{
    throw new Error(mensaje)
}