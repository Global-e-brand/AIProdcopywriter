import { getUserId } from "../general/common.function.js";
import contentModel from "../models/contentModel.js";

 async function createContent(req,dataresponse){
    let Results = [];
    await dataresponse.map((data,i) => {
        Results.push({"id":i+1,"result":data.text})
    });

    // console.log(`Results`,Results);   
    
    let userId= await getUserId(req);
    console.log("userId",userId)

    let contentModelData=new contentModel();
    contentModelData.user_id = userId;
    contentModelData.category = req.body.category;
    contentModelData.question_one = req.body.inputOne;
    contentModelData.question_two = req.body.inputTwo;
    contentModelData.tone = req.body.tone;
    contentModelData.results = Results;
    contentModelData.q_repeatation=null;
    contentModelData.created_date= new Date();
    let content=await contentModelData;

    console.log("content",content);
    contentModelData.save();

}

export default createContent;


