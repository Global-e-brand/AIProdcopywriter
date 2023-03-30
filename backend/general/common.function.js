import socialMediaUserModel from "../models/socialMediaUserModel.js";

export function getUserId(req) {
  // console.log("request",req);
  return req?.session?.passport?.user?._id || req?.session?.passport?.user?.id;
}

export function getDate_format(){
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();

  day.length == 1 && (day = "0" + day);
  month.length == 1 && (month = "0" + month);

  var yyyymmdd = year + month + day;

  return yyyymmdd;
};

export async function socialMediaUsers(user) {

  let socialMediaUserData=new socialMediaUserModel();
  if(user.provider =="google"){
      socialMediaUserData.email = user.emails;
      socialMediaUserData.google_id = user.id;
      socialMediaUserData.created_date = new Date();
      socialMediaUserData.updated_date = null;
      socialMediaUserData.deleted_date = null;
    }else if(user.provider =="facebook"){
      socialMediaUserData.email = "meta_email";
      socialMediaUserData.meta_id = "fb_id";
      socialMediaUserData.created_date = new Date();
      socialMediaUserData.updated_date = null;
      socialMediaUserData.deleted_date = null;
    }
    await socialMediaUserData.save();
    
}
