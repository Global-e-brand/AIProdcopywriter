import express, { json } from "express";
import bodyParser from "body-parser";


var app = express();

const contentController = express.Router();

app.use(bodyParser.urlencoded({extended: true,}));

contentController.post("/create",bodyParser.json(),async (req,res)=>{

});


export default contentController;