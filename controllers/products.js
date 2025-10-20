const Product = require("../models/product")


const getAllProducts = async (req,res)=> {
    const myData =  await Product.find();
    res.status(200).json({ myData });
}

const getProductsByName = async (req,res)=> {
   const {company,name,featured,price} = req.query;
   const queryObject = {};
if(company)
{
    queryObject.company =  { $regex : company , $options: "i"};;
}
if(featured){
    queryObject.featured = { $regex : featured , $options: "i"};
}
if(price){
    queryObject.price =  price;
}

if(name){
    queryObject.name = { $regex : name , $options: "i"};
}

//console.log(queryObject);
    const myData =  await Product.find( queryObject);
    res.status(200).json({ myData });
}
const getAllProductsTesting = async (req,res)=> {
    const testData =  await Product.find();

    res.status(200).json({ testData });
    
}

module.exports ={getAllProducts,getAllProductsTesting,getProductsByName}