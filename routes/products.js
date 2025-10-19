const express = require("express");

const router = express.Router();

const {getAllProducts,getAllProductsTesting,getProductsByName} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/name").get(getProductsByName);




module.exports = router;