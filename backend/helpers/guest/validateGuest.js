import guestModel from "../../models/guestModel.js";

export async function validateGuest(id) {
  try {
    let data = await guestModel.findOne({ systemID: id });
    if (data != null || data != undefined) {
      if (data.access) {
        var date1 = data.created_date;
        var date2 = new Date();
        var diffDays = date2.getDate() - date1.getDate();
        console.log(diffDays);
        if (diffDays >= 1) {
          await guestModel.findOneAndUpdate(
            { systemID: id },
            { access: false }
          );
          return false;
        }
      } else return false;
      console.log("data", data);
    } else {
      await guestModel.create({
        systemID: id,
        created_date: new Date(),
        access: true,
        isSubscribed: false,
        subscriber_email: "",
      });
    }
  } catch (error) {
    console.log("error occured", error);
  }
  return true;
}
