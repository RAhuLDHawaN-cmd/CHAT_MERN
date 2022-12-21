const express=require('express');

const app=express();
const UserRoutes=require("./routes/UserRoutes")


const mongoose=require("mongoose");

require("dotenv").config();

const cors=require("cors")
app.use(cors());

app.use(express.json());

app.use("/api/auth", UserRoutes)


mongoose.connect("mongodb+srv://rahul4:test123@cluster0.ar70d.mongodb.net/ChatDB",{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
    console.log("DB Connected to Chat")
}).catch((err)=>{
    console.log("Error while connecting"+ err.message)
})


app.listen(5000, (req,res)=>{
    console.log("server is hot at "+ process.env.PORT)
})
