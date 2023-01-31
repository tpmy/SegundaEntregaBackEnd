class ProductManager {
    

    constructor() {
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock, id){
        const Producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id,
        }
         if (this.products.length === 0) {
            Producto.id = 1;
         } else {
            Producto.id = this.products[this.products.length - 1].id + 1;
         }
        this.products.push(Producto)
    }


    getProductbyId(idProduct) {
        const evento = this.products.find(e => e.id === idProduct);
        if (!evento) {
            throw new Error("No encontrado");
        }
        const idRegistrado = evento.prods.includes(idProduct);
        if (idRegistrado) {
            throw new Error("Usuario ya registrado");
        }
        evento.prods.push(idProduct);
    }

}

const Prod = new ProductManager()
Prod.addProduct('Evento1','Lugar1',2.5, ' asdasd' , 'asas', 1)
Prod.getProductbyId()
console.log(Prod.getProducts())
console.log(Prod)
