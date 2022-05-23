var express = require("express");
var router = express.Router();

let getFavorites = require("../controllers/Favorites/getFavorites")
let postFavorites = require("../controllers/Favorites/postFavorites")
let putFavorites = require("../controllers/Favorites/putFavorites")

router.get("/", getFavorites)
router.post("/", postFavorites)
router.put("/", putFavorites)


module.exports = router;  