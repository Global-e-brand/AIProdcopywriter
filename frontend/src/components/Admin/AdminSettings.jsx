// @flow
import * as React from "react";
import "./adminsettings.css";
export default function AdminSettings() {
  return (
    <div className="">
      <div className="adminBar-desktopView">
        <p>Admin Settings</p>
      </div>
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
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 1</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 2</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 3</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 4</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 5</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 6</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 7</p>
              </div>
              <div className="mostRecurringUser-desktopView">
                <p>Random Username 8</p>
              </div>
            </div>
            <div className="customiseUserPrices-input-container">
              <div className="customiseUserPricesInputContainer-desktopView inputUser-desktopView">
                <input
                  placeholder="Input a user..."
                  name="modifyPriceInput-desktopView"
                  className="modifyPriceInput-desktopView"
                ></input>
                <button>Change</button>
              </div>
              <div className="customiseUserPricesInputContainer-desktopView ">
                <span className="input-span">
                  <input
                    placeholder="Input Value..."
                    name="modifyPriceInput-desktopView"
                    className="modifyPriceInput-desktopView"
                  ></input>
                </span>
                <button>Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
