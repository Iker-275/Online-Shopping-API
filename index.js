const express = require("express");
const https = require("https");


const app = express();

const PORT = 5000 || process.env.PORT;

const product_routes = require("./routes/products");
app.get("/",function(req,res){
res.send("We are live!")
})
app.post("/",function(req,res){
    
})

//middleware or set to router 

app.use("/api/products",product_routes);



const start = async function(){
try {
    app.listen( PORT ,function(){
    console.log('  Listening on port '+ PORT);
})
} catch (error) {
    console,log(error);
}

}


start();

