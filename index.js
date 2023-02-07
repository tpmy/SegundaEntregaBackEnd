const fs = require('fs')

class ProductManager {
    

    constructor() {
         this.productos = []
    }

    getProducts(){
        return this.productos
    }
    
    async addProduct(title, description, price, thumbnail, code, stock, id){
        const CadaProducto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id,
        }
         if (this.productos.length === 0) {
            CadaProducto.id = 1;
         } else {
            CadaProducto.id = this.productos[this.productos.length - 1].id + 1;
         }
    const comoJson = JSON.stringify(CadaProducto)

    fs.promises.writeFile('Productos.json', comoJson)

    const ProductosLeidos = JSON.parse(await fs.promises.readFile('Productos.json', 'utf-8'))
            this.productos.push(CadaProducto)
            console.log(ProductosLeidos);
    }

     async getProductbyId(idCadaProducto) {
         const elegirProducto = await this.productos.find(e => e.id === idCadaProducto);
         if (!elegirProducto) {
             throw new Error("No encontrado");
         }
          const nuevoProducto = {
              ...elegirProducto,
          }
        this.productos.push(nuevoProducto);
     }

     async deleteProduct(idCadaProducto) {
        const borrarProducto = await this.productos.find(e => e.id === idCadaProducto);
        if (borrarProducto) {
            fs.rmSync
        }
     }
     
}

const Productor = new ProductManager()
Productor.addProduct('Evento1','Lugar1',2.5, ' asdasd' , 'asas', 1)
Productor.deleteProduct(1)
console.log(Productor.getProducts())
console.log(Productor);
