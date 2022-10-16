import React from "react";
import CustomersList from "../UsersItem/CustomersItem";
import style from "../Ui_Modules/UI.module.css";

const UsersList = (props) => {
  return (
    <div className="container  mt-5 mb-5 text-center">
      <h1 className={style.center}>Customers List</h1>
      <ul className="container  ">
        {props.items.map((user,index) => {
          return (
            <div key={index}>
              <CustomersList
                name={user.name}
                money={user.balance}
                _id={user._id}
                id={user.id}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
