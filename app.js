import {default as fsWithCallbacks} from 'fs'
const fs = fsWithCallbacks.promises

class ProductManager {
  id = 1
	constructor(){
  	this.products = [];
    this.path = `./productos.json`;
    }

  async getProducts(){
    try{
		const productArchivo = await fs.readFile(this.path,"utf-8");
    return JSON.parse(productArchivo);
    
    } catch(e){
			await fs.writeFile(this.path,"[]");
      return "No Existe el archivo";
    }
	};

  async addProducts(producto){
    try{
      const productArchivo = await fs.readFile(this.path,"utf-8");
      let newProduct= JSON.parse(productArchivo);

    
    const validacion = newProduct.find((p) => p.id=== producto.id || p.code === producto.code);
    
    if(!validacion){
      throw new Error ("La ID ya esta en uso.")
    };
    
    if(newProduct.length > 0){
      const ultimoProducto= this.newProduct[this.newProduct.length() -1];
      this.id = ultimoProducto.id + 1;
    }

      newProduct.push({
        ...producto,
        id: this.id++
      });

      await fs.writeFile(this.path, JSON.stringify(newProduct,null,2));
      return "Producto Creado."
    }catch(e){
      throw new Error(e);
    }


  };

  async getProductByID(id){
try{
    const productArchivo = await fs.readFile(this.path,"utf-8");
      let idbusqueda= JSON.parse(productArchivo);
      const busquedaProducto = idbusqueda.find((p)=> p.id === id);

      if(!busquedaProducto){
        throw new Error("No se encontro producto")
      }
      else{
        // console.log(busquedaProducto);
        return busquedaProducto;
      }
    }catch(e){
      throw new Error(e);
    }

  };

  async updateProduct(id, product){
    try{
    const productArchivo = await fs.readFile(this.path,"utf-8");
    let producto= JSON.parse(productArchivo);

    const idProducto = products.findIndex((p)=> p.id === id);
    products.splice(idProducto, 1,{id,...product});

    await fs.writeFile(this.path, JSON.stringify(product,null,2));

    return "se actualizo producto."
  }catch(e){

  };

  };
  
  async deleteProduct(id){
    try{
      const productArchivo = await fs.readFile(this.path,"utf-8");
      let producto= JSON.parse(productArchivo);

      const idProducto = products.findIndex((p)=> p.id === id);
      if(!idProducto){
        throw new Error("No existe producto");
      }
      const borrarProducto= products.filter((p)=> p.id !== id);
      await fs.writeFile(this.path, JSON.stringify(borrarproduct,null,2));
    return "Producto Eliminado."
    }catch(e){
      throw new Error(e);
    }

  };
}
const generador = async () => {
  console.log(await pm.addProducts(producto1))
};

const pm = new ProductManager;
pm.getProductByID(1);
export default ProductManager;

