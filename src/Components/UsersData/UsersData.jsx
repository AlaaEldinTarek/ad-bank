import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../Ui_Modules/UI.module.css";
import { Link } from "react-router-dom";

const UsersData = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    axios
      .get("http://ad-bank.herokuapp.com/customers/" + id)
      .then((response) => {
        if (response.data.length > 0) {
          setCustomer({ ...response.data[0] });
        }
      });
  });
  return (
    <div className="container    mt-5 mb-5 text-center">
      <h1 className={style.center}>Coustomer Data</h1>
      <div className="container p-3  mt-5 mb-5  rounded  ">
        <div className="mt-5"></div>
        <div className="row g-2 m-2 p-3  shadow rounded rounded-3">
          <div className="col-sm-4  text-start">
            <label className=" fs-4  text-info  ">Customer Name</label>
          </div>
          <div className="col  p-1 w-75 fs-5 bg-body rounded border border-2 border-info text-center">
            {customer.name}
          </div>
        </div>
        <div className="row g-2 m-2 p-3 shadow rounded rounded-3 ">
          <div className="col-sm-4 text-start">
            <label className=" fs-4   text-info ">Customer Email</label>
          </div>
          <div className="col   w-75 p-1 bg-body fs-5 rounded border border-2 border-info text-center">
            {customer.email}
          </div>
        </div>
        <div className="row g-2 m-2 p-3 shadow rounded rounded-3">
          <div className="col-sm-4 text-start">
            <label className=" fs-4  text-info">Customer Phone</label>
          </div>
          <div className=" col  w-75  bg-body fs-5 rounded border border-2 border-info text-center">
            +{customer.phone}
          </div>
        </div>
        <div className="row g-2 m-2 p-3 shadow rounded rounded-3">
          <div className="col-sm-4 text-start">
            <label className=" fs-4   text-info">Customer Money</label>
          </div>
          <div className="col  w-75 bg-body fs-5 rounded border border-2 border-info text-center">
            ${customer.balance}
          </div>
        </div>
        <div className="row g-2 m-2 p-3 shadow rounded rounded-3  ">
          <div className="col-sm-12   ">
            <Link to="/transfer">
              <button className="btn  w-75 fs-4 btn-info fs-3   mt-2  text-light  ">
                Transfer Money
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default UsersData;
