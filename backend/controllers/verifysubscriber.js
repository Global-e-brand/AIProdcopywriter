import guestModel from "../models/guestModel.js";

async function verifysubscriber(systemID) {
  try {
    let isGuest = await guestModel.exists({
      systemID: systemID,
    });

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
