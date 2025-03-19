// interface de un animal

// type 
type GeneroAnimal = 'Masculino' | 'Femenino' 

// interface
interface Animal{
    tipo: string,
    sonido: string,
    genero: GeneroAnimal,
}

// extension de la interface
interface Mascota extends Animal{
    nombreMascota: string,
    edadMascota: number,
    nombreDueño: string,
}

// mock de la interface
const mascota: Mascota = {
    tipo: 'Perro',
    sonido: 'Guau guau',
    genero: 'Masculino',

    nombreMascota: 'Milo',
    edadMascota: 3,
    nombreDueño: 'Daniel Enrique'
}