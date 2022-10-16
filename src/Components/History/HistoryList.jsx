import React from "react";
import style from "../Ui_Modules/UI.module.css";
import History from "./History";

const HistoryList = (props) => {
  return (
    <div className="container   mt-5 mb-5 text-center">
      <h1 className={style.center}>History List</h1>

      <ul className="container mb-5 mt-5">
        {props.item.map((user, index) => {
          return (
            <div key={index}>
              <History
                key={user._id}
                from={user.from}
                to={user.to}
                amount={user.amount}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryList;
