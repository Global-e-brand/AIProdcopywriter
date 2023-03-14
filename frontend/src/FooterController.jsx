import Footer from "./Footer";
import noFooterURL from "./components/json/nofooter.json";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function FooterController() {
  const [isFooterVisible, setFooterVisibility] = useState(false);
  const location = useLocation();

  useEffect(() => {
    showFooter();
  }, [location.pathname]);

  const showFooter = () => {
    setFooterVisibility(
      !noFooterURL.some((item) => item.url === location.pathname)
    );
  };

  return <>{isFooterVisible ? <Footer /> : <></>}</>;
}

export default FooterController;
