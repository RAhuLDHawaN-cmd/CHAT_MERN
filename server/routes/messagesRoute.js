
const express =require("express");
const router=express.Router();
const { addMessage } =require( "../controllers/messagesController");
const { getMessages } =require( "../controllers/messagesController");

router.post("/addmsg",addMessage)
router.post("/getmsg",getMessages)


module.exports=router;
 