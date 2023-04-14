import adminSettingModel from "../../models/adminSettings.model.js";
import userModel from "../../models/userModel.js";

export async function validateAdmin(id) {
  let user = await userModel.findById(id);
  let isRoleKey = (await user?.role) != undefined ? true : false;
  if (user.role === "admin" && isRoleKey === true ) {
    return true;
  }else{
    return false;
  }
  
}

export async function updateBasicPlan(Id, price) {
  adminSettingModel.create({
    app_basic_plan: price,
    user_id: Id,
    created_date: new Date(),
  });
}

export async function updateUserRole(id, email) {
  let user = await userModel.find({ email });

  let isRoleKey = (await user?.role) != undefined ? true : false;
  let isUseridKey = (await user?.user_id) != undefined ? true : false;

  if (isRoleKey == true && isUseridKey == true) {
    await userModel.updateOne(
      { email: email },
      { user_id: id, role: "admin" }
    );
  } else {
    await userModel.updateOne(
        { email: email },
        { user_id: id, role: "admin" }
    );
  }
}
