import socialMediaUserModel from "../models/socialMediaUserModel.js";

export function getUserId(req) {
  // console.log("request",req);
  return req?.session?.passport?.user?._id || req?.session?.passport?.user?.id;
}

export function getDate_format() {
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();

  day.length == 1 && (day = "0" + day);
  month.length == 1 && (month = "0" + month);

  var yyyymmdd = year + month + day;

  return yyyymmdd;
}

export async function socialMediaUsers(user) {
  // console.log("id", user.id);
  // console.log("email", user.emails);
  const response = await socialMediaUserModel.findOne();
  let socialMedia;
  if (user.provider == "google") {
    socialMedia = {
      email: user.emails,
      google_id: user.id,
      created_date: new Date(),
      updated_date: new Date(),
      deleted_date: null,
    };
  } else if (user.provider == "facebook") {
    socialMedia = {
      email: "meta_email",
      meta_id: "fb_id",
      created_date: new Date(),
      updated_date: null,
      deleted_date: null,
    };
  }

  if (!response) {
    await socialMediaUserModel.create(socialMedia);
  } else {
    await socialMediaUserModel.updateOne(socialMedia);
  }
}
