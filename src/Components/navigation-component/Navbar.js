import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div>
          </li>
          <li>
            <a href="/">First</a>
          </li>
          <li>
            <a href="/">Second</a>
          </li>
          <li>
            <a href="/">Third</a>
          </li>
        </ul>
      </nav>
      <div className={menu_class}>
        <div className="menu-links">
          <a href="/">First</a>
          <div className="border" />
          <a href="/">Second</a>
          <div className="border" />
          <a href="/">Third</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
