import express, { json } from "express";
import bodyParser from "body-parser";
import userModel from "../models/userModel.js";

var app = express();

const user = express.Router();

app.use(bodyParser.urlencoded({extended: true,}));

user.post("/register", bodyParser.json(), async (req, res) => {
    let email =req.body.email;
    let password=req.body.password;
    let confirm_password=req.body.confirm_password;   

    if(email == null&&password==null&&confirm_password==null) {
       return res.status(400).send({message:"text fields sholud not be empty"});  
    } 
    
    try{
        if(password===confirm_password){
            const userModelData = new userModel();
            userModelData.email=email;
            userModelData.password = password;
            userModelData.confirm_password = confirm_password;
            userModelData.created_date=new Date();
            userModelData.updated_date=null;
            userModelData.deleted_date=null;
            userModelData.save();

            res.status(201).send({message:"user registered successfully !"});
            
        }else{
            res.send("password should not be same")
        }
        
    }catch(e){
        res.status(400).send(e);
    }
    
});


export default user;
