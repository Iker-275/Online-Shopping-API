const express = require("express");

const router = express.Router();

const {getAllProducts,getAllProductsTesting,getProductsByName,postNewProduct} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/search").get(getProductsByName);

//router.route("/products/add").post(postNewProduct);
router.post("/add",postNewProduct);






module.exports = router;