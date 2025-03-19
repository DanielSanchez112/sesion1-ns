// contratos entrada Persona:

interface DireccionPersona{
    calle: string,
    colonia: string,
    zipCode: string,
}

interface Persona {
    nombre: string,
    apellido: string,
    edad: number,
    direccion?: DireccionPersona | null,
    genero: 'Masculino' | 'Femenino' | 'ND'
  }
  
  // Mock Persona:
  
  const Mock: Persona = {
    nombre: 'Arturo',
    apellido: 'Gonzalez',
    edad: 24,
    genero: 'Masculino' 
  }

// direccion persona
