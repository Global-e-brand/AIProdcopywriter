import React, { useEffect, useState } from "react";
import AdminSettings from "./AdminSettings";
import UserSettings from "./UserSettings";



function SettingPage(props) {
  const [isAdmin, setAdmin] = useState(true);


  return isAdmin ? (
    <>
      <AdminSettings />
    </>
  ) : (
    <UserSettings />
  );
}

export default SettingPage;
