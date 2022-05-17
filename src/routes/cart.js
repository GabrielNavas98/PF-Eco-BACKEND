var express = require("express");
var router = express.Router();

let getProducts = require("../controllers/Cart/getProducts")
//let getProductsCart = require("../controllers/Cart/getProductsCart")
let addProductCart = require("../controllers/Cart/addProductCart")
// let putProduct = require("../controllers/Cart/putProductCart")
// let deleteProduct = require("../controllers/Cart/deleteProductCart")

router.post("/", addProductCart)
router.get("/", getProducts)

//router.get("/products-cart", getProductsCart)
// router.put("/products-cart/:productId", putProduct)
// router.put("/products-cart/:productId", deleteProduct)

module.exports = router; 