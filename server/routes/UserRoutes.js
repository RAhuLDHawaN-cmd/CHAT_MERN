const express =require("express");
const { register } = require("../controllers/UserController");
const {login} = require("../controllers/UserController");

const {setAvatar}=  require("../controllers/UserController");
const {getAllUsers}=require("../controllers/UserController")
const router=express.Router();x


router.post("/register",register)
router.post("/login",login)
router.post("/setAvatar/:id",setAvatar)
router.get("/allusers/:id",getAllUsers)



module.exports=router;
