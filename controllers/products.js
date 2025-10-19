const Product = require("../models/product")


const getAllProducts = async (req,res)=> {
    const myData =  await Product.find();
    res.status(200).json({ myData });
}

const getProductsByName = async (req,res)=> {
    const myData =  await Product.find({name : 'iPhone 15 Pro' });
    res.status(200).json({ myData });
}
const getAllProductsTesting = async (req,res)=> {
    const testData =  await Product.find();

    res.status(200).json({ testData });
    
}

module.exports ={getAllProducts,getAllProductsTesting,getProductsByName}