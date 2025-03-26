"use strict";
class Producto {
    constructor(sku, nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        // aqui esta la variable privada
        // necesario para poder acceder por que es privado
        this.sku = sku;
    }
    getDetalles() {
        return `SKU: | ${this.sku}, Nombre: ${this.nombre} - $ ${this.precio}MXN`;
    }
}
const myProduct = new Producto(9001, 'coffe', 10);
console.log('Detalles: ', myProduct.getDetalles());
// modificadores de acceso
//public, private, protected
//public accede de cualquier lugar
//private solo accesibles dentro de la clase
//protected accesible dentro de la calse y sub clases
