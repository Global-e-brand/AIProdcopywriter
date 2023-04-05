import React,{useState} from "react";
import "./adminsettings.css";
import SidebarMenu from "../../SidebarMenu";
import { Grid } from "@mui/material";


export default function AdminSettings() {
  
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
                <div className="modifyPrices-desktopView ">
                  <div className="Plan-desktopView">
                    <div className="planHeader-desktopView">
                      <p className="planLabel-desktopView">Basic Plan</p>
                      <p className="currentPriceLabel-desktopView">
                        Currently $99 per month
                      </p>
                    </div>
                    <div className="modifyPriceInputContainer-desktopView">
                      <input
                        placeholder="$29.99"
                        name="modifyPriceInput-desktopView"
                        className="modifyPriceInput-desktopView"
                      ></input>
                      <button>Change</button>
                    </div>
                  </div>
                  <div className="Plan-desktopView">
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
                  </div>
                </div>
              </div>
              <div className="customiseUserPricesContainer-desktopView">
                <div className="customiseUserPricesHeader-desktopView">
                  Customise user Prices
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
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
