const Product = require("../models/product")


const getAllProducts = async (req,res)=> {
    const myData =  await Product.find().sort("name");
    res.status(200).json({ myData });
}

const getProductsByName = async (req,res)=> {
   const {company,name,featured,price,sort,select} = req.query;
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
    
   apiData = apiData.sort(sortFix);
}

if(select){
   // let selectFix = select.replace(","," ");
    let selectFix = select.split(",").join(" ");

     apiData = apiData.select(selectFix);
}

let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 10;

let skip = (page- 1)* limit ;

apiData = apiData.skip(skip).limit(limit);



//console.log(queryObject);
    const myData =  await apiData;
   // res.status(200).json({ myData });
    res.status(200).json({ myData ,nbHits:myData.length});

}
const getAllProductsTesting = async (req,res)=> {
    //const testData =  await Product.find().sort("-name");
    const testData =  await Product.find().select("name price company");


    res.status(200).json({ testData });
    
}

const postNewProduct = async (req,res)=> {

    const data = new Product({
        name:req.body.name,
        price:req.body.price,
        company:req.body.company,
        rating:req.body.rating,
        featured:req.body.featured

    })
    
    const testData =  await data.save();


    res.status(201).json({ testData , message:"succesfully added."});
    
}

module.exports ={getAllProducts,getAllProductsTesting,getProductsByName,postNewProduct}