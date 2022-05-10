var express = require("express");
var router = express.Router();

const postUser = require("../controllers/Users/postUser");
const getUsers = require("../controllers/Users/getUsers");
const getUserByID = require("../controllers/Users/getUserByID");
//const deleteUser = require("../controllers/Users/deleteUser");
//const putUser = require("../controllers/Users/putUser");

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUserByID);
//router.delete("/", deleteUser);
//router.put("/", putUser);

module.exports = router;