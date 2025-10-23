const express = require("express");

const router = express.Router();

const {getAllProducts,getAllProductsTesting,getProductsByName,postNewProduct,updateProduct,deleteProduct} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/search").get(getProductsByName);


router.post("/add",postNewProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);

module.exports = router;