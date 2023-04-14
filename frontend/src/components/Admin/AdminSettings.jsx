import * as React from "react";
import "./adminsettings.css";
import { useState } from "react";
import SidebarMenu from "../../SidebarMenu";
import { Button, Grid, TextField } from "@mui/material";
import { tickCircle } from "../../assets";


export default function AdminSettings() {

  const [submit, setSubmit] = useState(false);
  
  async function handleBasicPlan() {     
    let value = document.getElementById('basicplan_id').value; 

    let res = await fetch("/admin/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        basicPlanPrice: value,
      }),
    });
    let response = res.json();
    //setSubmit(true);
  }

  async function handleAdminRole(){
    let email = document.getElementById('email-id').value; 

    let res = await fetch("/admin/role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    let response = res.json();
  }


  return (
    <div>
      <div className="adminBar-desktopView">
        <p>Admin Settings</p>
      </div>
      <Grid container>
        <Grid item xs={3}>
          <SidebarMenu />
        </Grid>
        <Grid item xs={9}>
          <div className="parent-container-desktopView">
            <div className="adminSettingsContainer-desktopView">
              <div className="modifyPricesContainer-desktopView">
                <div className="modifyPricesHeader-desktopView">
                  Modify All Prices
                </div>
                <div className="modifyPrices-desktopView">
                  <div className="Plan-desktopView">
                    <div className="planHeader-desktopView">
                      <p className="planLabel-desktopView">Basic Plan</p>
                      <p className="currentPriceLabel-desktopView">
                        Currently $19.95 per month
                      </p>
                    </div>
                    <div className="modifyPriceInputContainer-desktopView">
                    
                      <input
                        placeholder="$ 29.99"
                        id="basicplan_id"
                        name="modifyPriceInput-desktopView"
                       // onChange={(e)=>setBasicPlanPrice(e.target.value)} 
                        className="custom-tf"
                      />
                      <Button className="ad-btn" onClick={()=>handleBasicPlan()}>Update</Button>
                    </div>
                  </div>
                  {/* <div className="Plan-desktopView">
                    <div className="planHeader-desktopView">
                      <p className="planLabel-desktopView">Standard Plan</p>
                      <p className="currentPriceLabel-desktopView">
                        Currently $99 per month
                      </p>
                    </div>
                    <div className="modifyPriceInputContainer-desktopView">
                      <input
                        placeholder="Input Value..."
                        name="modifyPriceInput-desktopView"
                        className="modifyPriceInput-desktopView"
                      ></input>
                      <button>Change</button>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="customiseUserPricesContainer-desktopView">
                <div className="customiseUserPricesHeader-desktopView">
                  Customise User Prices
                </div>
                <div className="customiseUserPrices-desktopView">
                  <p id="mostRecurringUsersHeader-desktopView">
                    Most Recurring users
                  </p>
                  <div className="mostRecurringUsers-desktopView">
                    <label className="mostRecurringUser-desktopView">
                      <input type="checkbox" value="1" />
                      <span>Random Username 1</span>
                    </label>
                    <label className="mostRecurringUser-desktopView">
                      <input type="checkbox" value="1" />
                      <span>Random Username 2</span>
                    </label>
                    <label className="mostRecurringUser-desktopView">
                      <input type="checkbox" value="1" />
                      <span>Random Username 3</span>
                    </label>
                    <label className="mostRecurringUser-desktopView">
                      <input type="checkbox" value="1" />
                      <span>Random Username 4</span>
                    </label>
                    <label className="mostRecurringUser-desktopView">
                      <input type="checkbox" value="1" />
                      <span>Random Username 5</span>
                    </label>
                  </div>
                  <div className="customiseUserPrices-input-container">
                    <div className="customiseUserPricesInput-desktopView inputUser-desktopView">
                      <input
                        placeholder="Input a user..."
                        name="modifyPriceInput-desktopView"
                        className="modifyPriceInput-desktopView"
                      ></input>
                      <button>Change</button>
                    </div>
                    <div className="customiseUserPricesInput-desktopView ">
                      <span className="input-span">
                        <input
                          placeholder="Input Value..."
                          name="modifyPriceInput-desktopView"
                          className="modifyPriceInput-desktopView"
                          // onClick={handleClick}
                        ></input>
                      </span>
                      <button>Change</button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="user-DesktopView">
                <p>Provide Admin Role</p>
                <div className="user-requestDesktopView">
                  <p>Admin Role</p>
                  <Grid
                    container
                    spacing={2}
                    xs={12}
                    className="div-userrequest"
                  >
                    <Grid className="userRequests" item xs={12}>
                      <input
                        type="email"
                        id="email-id"
                        className="userRequests-input"
                        placeholder="xyz@creativewriter.ai"
                       /// onLoad={()=>setBasicPlanPrice(e.target.value)} 
                      />
                      <Button  className="ad-btn" onClick={()=>handleAdminRole()} >Submit</Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="requestpopup">
        {submit && (
          <div className="requestpopup-style">
            <img src={tickCircle} alt="" className="tickCircle" />
            <p>Request Sent</p>
          </div>
        )}
      </div>
    </div>
  );
}
