import ProductManager from "./app.js";
import express from "express";
const pManager = new ProductManager();



const app = express();

app.get('/products', async(req,res) => {
    const productos = await pManager.getProducts()
    const limit = req.query.limit;
    const limite = productos.length;

//http://localhost:8080/products?limit=10
//http://localhost:8080/products?limit=3
    
    if(limit < limite && limit != 0  ){
        return res.send(productos.slice(0,limit));   
    }
    else{       
        // console.log("ELSE") testing
        return res.send(productos);   
    };
});
app.get('/products/:pid', async (req,res) => {
    // const pId = req.params.pid;
    // const productos = await pManager.getProducts()
    const productoID = await pManager.getProductByID(parseInt(req.params.pid));
    // console.log(parseInt(req.params.pid))
return res.send(productoID);  
});


app.listen(8080, ()=>{
    console.log("Servidor Escuchanding...");
});