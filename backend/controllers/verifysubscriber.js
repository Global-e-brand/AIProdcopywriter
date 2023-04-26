import guestModel from "../models/guestModel.js";

async function verifysubscriber(req, systemID) {
  try {
    console.log("systemid", systemID);
    let email = req.session.passport.user.email;
    let isGuest = false;
    if (email == "mohit@an-associates.com") isGuest = true;

    // let isGuest = await guestModel.exists({
    //   systemID: systemID,
    // });
    console.log("isGuest", isGuest);
    if (isGuest) {
      let guestUser = await guestModel.find({ systemID });
      console.log(guestUser);
      //   console.log("isGuestSubscribed-->", guestUser[0].isSubscribed);
      if (guestUser[0].isSubscribed == false) return true;
      else {
        console.log("guest already subscribed");
        return false;
      }
    } else {
      console.log("not a guest");
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export default verifysubscriber;
