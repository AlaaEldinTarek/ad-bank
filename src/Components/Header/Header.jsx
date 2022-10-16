import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../Ui_Modules/UI.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navbar sticy-top  bg-info text-light ">
      <div className="container-md w-75 text-center ">
        <Link className={`nav-link  ${style.nav}`} to="/">
          <img
            src={require("../img/bank_PNG24.png")}
            alt="Logo"
            width="35"
            className="d-inline-block align-text-top"
          ></img>
          <span className={`nav-item  ${style.nav}`}>AD Bank</span>
        </Link>
        <div className="navbar-expand-sm " id="navbarNav">
          <ul className="navbar-nav">
            <Link className={` ${style.navlink}`} to="/Customers">
              Customers
            </Link>
            <Link className={` ${style.navlink}`} to="/transfer">
              Transfer Money
            </Link>
            <Link className={`${style.navlink}`} to="/history">
              History
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
