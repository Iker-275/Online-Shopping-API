const Product = require("../models/product")


const getAllProducts = async (req,res)=> {
    const myData =  await Product.find().sort("name");
    res.status(200).json({ myData });
}

const getProductsByName = async (req,res)=> {
   const {company,name,featured,price,sort} = req.query;
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

let apiData = Product.find( queryObject);
if(sort){
    let sortFix = sort.replace(","," ");
   // queryObject.sort = sortFix;
   apiData = apiData.sort(sortFix);
}

//console.log(queryObject);
    const myData =  await apiData;
    res.status(200).json({ myData });
}
const getAllProductsTesting = async (req,res)=> {
    const testData =  await Product.find().sort("-name");

    res.status(200).json({ testData });
    
}

module.exports ={getAllProducts,getAllProductsTesting,getProductsByName}