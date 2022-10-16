import React from "react";
import style from "../Ui_Modules/UI.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  return (
    <div className=" container  mb-5 text-center">
      <div className="row  ">
        <img
          src={require("../img/11.png")}
          alt="logo"
          className={style.img}
        ></img>
        <div className={style.typewriter}>
          <Typewriter
            options={{
              strings: ["Welcome To AD Bank"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <img
          src={require("../img/22.png")}
          alt="logo"
          className={style.img}
        ></img>
        <div className="col m-0 p-0   ">
          <div className="p-2 w-100  mt-3 mb-1  text-center">
            <Link to="/ViewCustomers">
              <button className="btn p-1 fs-2 mb-2 btn-info w-50 shadow-sm  text-light ">
                Customers
              </button>
            </Link>
          </div>
          <div className="p-2 w-100  mt-3 mb-1  text-center ">
            <Link to="/history">
              <button className="btn p-1 fs-2 mb-2 btn-info w-50 shadow-sm  text-light ">
                History
              </button>
            </Link>
          </div>
          <div className="p-2 w-100  mt-3 mb-1  text-center ">
            <Link to="/transfer">
              <button className="btn p-1 fs-2 mb-2 btn-info w-50 shadow-sm  text-light ">
                Transfer Money
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
