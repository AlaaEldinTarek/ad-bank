import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../Ui_Modules/UI.module.css";
import { Link } from "react-router-dom";

const CustomersList = (props) => {
  return (
    <li  className={style.list}>
      <div className="container  p-3  mb-4  shadow rounded  text-center  ">
        <div className="row g-2 ">
          <div className="col-sm-4">
            <div className="shadow-sm p-1 bg-body w-100 rounded border border-2 border-info">
              {props.name}
            </div>
          </div>
          <div className="col-sm-2">
            <div className="shadow-sm  p-1 bg-body w-100 rounded border border-2 border-info ">
              ${props.money}
            </div>
          </div>
          <div className="col-sm-3  text-info">
            <Link to={"/Customers/" + props._id}>
              <button className="btn p-1 btn-info shadow-sm  w-100 text-light ">
                Click To view Data
              </button>
            </Link>
          </div>
          <div className="col-sm-3">
            <Link to="/transfer">
              <button className="btn p-1 btn-info shadow-sm  w-100 text-light ">
                Transfer Money
              </button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CustomersList;
