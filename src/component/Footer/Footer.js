import React from "react";
import "./Footer.css";
import addIcon from "./icon/add.svg";
import bellIcon from "./icon/bell.svg";
import menuIcon from "./icon/menu.svg";
import searchIcon from "./icon/search.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
          <div className="footer-left">
        <div>
          <img src={searchIcon} />
        </div>

        <div>
          <img src={menuIcon} />
        </div>
        <div style={{ color: "#4A00CD" }}>
        <img src={bellIcon} />
          <span>1</span>
        </div>
        </div>
        <div className="footer-right">
        <div className={addIcon}>
          <img src={addIcon} />
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
