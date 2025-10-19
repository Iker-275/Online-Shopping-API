const getAllProducts = async (req,res)=> {
    res.status(200).json({msg:"All products"});
}

const getAllProductsTesting = async (req,res)=> {
    res.status(200).json({msg:"All products Testing"});
    
}

module.exports ={getAllProducts,getAllProductsTesting}