import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../Ui_Modules/UI.module.css";

const History = (props) => {
  return (
    <li className={style.list}>
      <div className="container   pb-2 mb-3    shadow rounded  text-center ">
        <div className="row g-2 mb-1">
          <div className="col-sm-5  mb-1">
            <label className=" p-1 text-info">Sender</label>
            <div className=" p-1 bg-body  rounded border border-2 border-info">
              {props.from}
            </div>
          </div>
          <div className="col-sm-4">
            <label className=" p-1 text-info">Receiver</label>
            <div className="  p-1 bg-body  rounded border border-2 border-info ">
              {props.to}
            </div>
          </div>
          <div className="col-sm-3  ">
            <label className=" p-1 text-info">Amount</label>
            <div className="  p-1 bg-body  rounded border border-2 border-info ">
              ${props.amount}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default History;
