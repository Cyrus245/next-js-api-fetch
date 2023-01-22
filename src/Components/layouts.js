import React from "react";
import Nav from "./Nav";
import Headers from "./Header";
import s from "../styles/Layout.module.css";

const layouts = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main className={s.main}>
          <Headers />
          {children}
        </main>
      </div>
    </>
  );
};

export default layouts;
