class Producto {
    //public, private, protected
    private sku: number
  
    constructor(sku:number, public nombre: string, public precio: number) {
    // aqui esta la variable privada
    // necesario para poder acceder por que es privado
        this.sku = sku
    }
  

    getDetalles(): string {
        return `SKU: | ${this.sku}, Nombre: ${this.nombre} - $ ${this.precio}MXN`
    }

}
  
  const myProduct = new Producto(9001, 'coffe', 10)
  console.log('Detalles: ', myProduct.getDetalles())


    // modificadores de acceso
    //public, private, protected
    //public accede de cualquier lugar
    //private solo accesibles dentro de la clase
    //protected accesible dentro de la calse y sub clases