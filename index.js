class ProductManager {
    

    constructor() {
        this.productos = []
    }

    getProducts(){
        return this.productos
    }

    addProduct(title, description, price, thumbnail, code, stock, id){
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
        this.productos.push(CadaProducto)
    }


     getProductbyId(idCadaProducto) {
         const elegirProducto = this.productos.find(e => e.id === idCadaProducto);
         if (!elegirProducto) {
             throw new Error("No encontrado");
         }
          const nuevoProducto = {
              ...elegirProducto,
          }
        this.productos.push(nuevoProducto);
     }
}

const Productor = new ProductManager()
Productor.addProduct('Evento1','Lugar1',2.5, ' asdasd' , 'asas', 1)
Productor.addProduct('Evento1','Lugar1',2.5, ' asdasd' , 'asas', 1)
Productor.getProductbyId(1)
console.log(Productor.getProducts())
// console.log(Productor)
