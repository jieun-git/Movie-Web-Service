import React from "react";

import { Link } from "react-router-dom";

import menuList from "./MenuList.js";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.title}>
        <a href="/">NETFLIX</a>
      </div>
      <ul className={styles.option_list}>
        {menuList.map(({ title, path }) => {
          return (
            <li key={path}>
              <Link to={`/${path}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
