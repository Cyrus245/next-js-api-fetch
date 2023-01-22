import React from "react";
import Link from "next/link";
import NavStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <ul className={NavStyles.ul}>
        <li>
          <Link href="/" className={NavStyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={NavStyles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={NavStyles.link}>
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
