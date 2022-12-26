const Messages = require("../Models/messagesModel");

module.exports.getMessages= async(req,res,next)=>{
    const {from,to}=req.body;
    try{
        const messages=await Messages.find({
             users:{
            $all:[from,to]
             }
        }).sort({ updatedAt: 1 });
        const projectedMessages = messages.map((msg) => {
            return {
              fromSelf: msg.sender.toString() === from,
              message: msg.message.text,
            };
          });
          res.json(projectedMessages);
    }
    catch(ex){
        next(ex)
    }

};


module.exports.addMessage= async(req,res)=>{
    const {from,to,message}=req.body;
    try{

const data= await Messages.create({message: { text: message },
    users: [from, to],
    sender: from,
});

if(data) return res.json({msg:"msg added to chat"});
else return res.json({msg: "Failed to add message to the database"});

    }
    catch(ex){
        next(ex)
    }
}