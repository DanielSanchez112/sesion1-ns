//contrato persona

// interface y type
type Genero = 'Masculino' | 'Femenino' | 'ND' //basado en una lista numerada
type ID = string | number //basado en una lista numerada

interface Persona2{
    nombre: string,
    apellido: string,
    saludar: () => void,
    genero: Genero,
}

interface Usuario extends Persona2{
    id: ID,
}

const usuario: Persona2 = {
    nombre: 'Daniel Enrique',
    apellido: 'Sanchez',
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
    },
    genero: 'Masculino'
}
