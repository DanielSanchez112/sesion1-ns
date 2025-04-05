// crear classes para productos e inventarios:
interface IProducto{
    sku: number
    nombre: string
    precio: number
    cantidad: number
    categoria: string
}

interface IInventario{
    productos: IProducto[]
}

class InventarioProductos{
    private productos: IProducto[] = []
    private inventario: IInventario[] = []

    constructor(productos: IProducto[]){
        this.productos = productos
        this.inventario = []
    }

    // agregar un producto al inventario
    createProducto(producto: IProducto): void{
        const existeProducto = this.productos.find(p => p.sku === producto.sku)
        if(existeProducto){
            console.log("El producto ya existe")
            return
        }
        this.productos.push(producto)
        console.log("Producto creado")
        console.log(this.productos[this.productos.length - 1])
    }

    altaProductoEnInventario(producto: IInventario): void{
        const index = this.inventario.findIndex(inv => inv.productos[0].sku === producto.productos[0].sku)
        if(index !== -1){
            console.log("El producto ya existe en el inventario")
            return
        }
        this.inventario.push(producto)
        console.log("Producto agregado al inventario")
        console.log(this.inventario[this.inventario.length - 1])
    }


    // eliminar un producto del inventario
    deleteProducto(sku: number): void{
        const index = this.productos.findIndex(producto => producto.sku === sku)
        if(index === -1){
            console.log("El producto no existe")
            return
        }
        this.productos.splice(index, 1)
        console.log("Producto eliminado")
        console.log(this.productos)
    }

    bajaProductoEnInventario(sku: number): void{
        const index = this.inventario.findIndex(inv => inv.productos[0].sku === sku)
        if(index === -1){
            console.log("El producto no existe en el inventario")
            return
        }
        this.inventario.splice(index, 1)
        console.log("Producto eliminado del inventario")
        this.inventario.forEach(element => {
            console.log(element.productos[0])
        })
    }

    // editar un producto del inventario
    editarProducto(sku: number, productoEditado: IProducto): void{
        const index = this.productos.findIndex(producto => producto.sku === sku)
        if(index !== -1){
            this.productos[index] = productoEditado
            console.log("Producto editado")
            console.log(this.productos[index])
            //editar en el inventario
            const indexInventario = this.inventario.findIndex(inv => inv.productos[0].sku === sku)
            if(indexInventario !== -1){
                this.inventario[indexInventario].productos[0] = productoEditado
                console.log("Producto editado en el inventario")
                console.log(this.inventario[indexInventario])
            }
        }
    }

    // obtener todos los productos del inventario
    obtenerProductos(): IProducto[]{
        console.log("Productos encontrados")
        console.log(this.productos)
        return this.productos
    }

    // obtener inventario
    obtenerInventario(): IInventario[]{
        console.log("Inventario encontrado")
        this.inventario.forEach(element => {
            console.log(element.productos[0])
        });
        return this.inventario
    }
}


// Inventario tiene 1 o varios productos


// se pueden dar de alta nevos productos del inventario
// dar de baja esos nuevos productos del inventario
// se pueden editar los productos

//prueba de la clase InventarioProductos
const inventario = new InventarioProductos([])
const producto1: IProducto = {
    sku: 1,
    nombre: "Café",
    precio: 100,
    cantidad: 10,
    categoria: "Bebidas"
}

const producto2: IProducto = {
    sku: 2,
    nombre: "Té",
    precio: 50,
    cantidad: 20,
    categoria: "Bebidas"
}

const producto3: IProducto = {
    sku: 3,
    nombre: "Galletas",
    precio: 30,
    cantidad: 30,
    categoria: "Comida"
}


inventario.createProducto(producto1)
inventario.createProducto(producto2)
inventario.createProducto(producto3)

inventario.obtenerProductos()

inventario.altaProductoEnInventario({
    productos: [producto1]
})

inventario.altaProductoEnInventario({
    productos: [producto2]
})

inventario.altaProductoEnInventario({
    productos: [producto3]
})

inventario.obtenerInventario()

inventario.bajaProductoEnInventario(2)

inventario.obtenerInventario()