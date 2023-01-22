import React from "react";
import HeaderStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={HeaderStyle.center}>
      <h1>
        <span className={HeaderStyle.title}>WebDev </span> News
      </h1>
    </div>
  );
};

export default Header;
