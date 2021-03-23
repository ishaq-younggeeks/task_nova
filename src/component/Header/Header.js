import React from "react";
import "./Header.css";
import menu from "./icon/menu.svg";
import back from "./icon/back.svg";
import user from "./icon/user.svg";
import dot from "./icon/dot.svg";
import leftArrow from "./icon/leftArrow.svg";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
            <div>          <img src={leftArrow} />
</div>
        </div>
        <div className="header-right">
          <div>
            <img src={menu} />
          </div>
          <div className="image-header">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/avatar-1.jpg"}
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/avatar-1.jpg"}
                width="24px"
                height="24px"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/avatar-1.jpg"}
                width="24px"
                height="24px"
              />
            </div>
          </div>
          <div>
            <img src={user} />
          </div>
          <div>
            <img src={back} />
          </div>
          <div>
            <img src={dot} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
