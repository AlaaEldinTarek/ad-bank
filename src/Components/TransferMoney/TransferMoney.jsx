import React from "react";
import style from "../Ui_Modules/UI.module.css";
import { useState } from "react";
import axios from "axios";

const TransferMoney = (props) => {
  const [customerfrom, setCustomerFrom] = useState("");
  const [customerto, setCustomerTo] = useState("");
  const [customeramount, setCustomerAmount] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    //Get sender and receiver
    const sender = props.items.find((sen) => sen.name === customerfrom.from);
    const receiver = props.items.find((rec) => rec.name === customerto.to);
    console.log(sender);
    console.log(receiver);

    if (
      sender.balance < customeramount.amount ||
      customeramount.amount === 0 ||
      customeramount.amount < 0 ||
      customeramount.amount === ""
    ) {
      alert("Insufficient funds");
    } else {
      //Add transaction to table
      axios
        .post("http://ad-bank.herokuapp.com/transfer/add", {
          from: customerfrom.from,
          to: customerto.to,
          amount: customeramount.amount,
        })
        .then(function (response) {
          alert("Transaction Successful!");
        })
        .catch(function (error) {
          console.log(error);
        });

      //Update sender's balance
      let sender_new_balance =
        parseInt(sender.balance) - parseInt(customeramount.amount);
      console.log(sender_new_balance);
      axios
        .post("https://ad-bank.herokuapp.com/customers/update/" + sender._id, {
          balance: sender_new_balance,
        })
        .then(function (response) {
          console.log("user1 updated");
        })
        .catch(function (error) {
          console.log(error);
        });
      //Update receiver's balance
      let rec_new_balance =
        parseInt(receiver.balance) + parseInt(customeramount.amount);
      console.log(rec_new_balance);
      axios
        .post(
          "https://ad-bank.herokuapp.com/customers/update/" + receiver._id,
          {
            balance: rec_new_balance,
          }
        )
        .then(function (response) {
          console.log("user2 updated");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleFromChange = (event) => {
    setCustomerFrom({ from: event.target.value });
  };
  const handleToChange = (event) => {
    setCustomerTo({ to: event.target.value });
  };
  const handleAmountChange = (event) => {
    setCustomerAmount({ amount: event.target.value });
  };

  return (
    <div>
      <div className="container  mt-5  text-center">
        <h1 className={style.center}>Transfer Money</h1>

        <form
          onSubmit={handlerSubmit}
          className="container   pb-2 mt-5  text-center"
        >
          <div className="row  g-3  w-75 mx-auto text-center pt-4 ">
            <div className="col-sm-12 mb-3 ">
              <div className=" row justify-content-md-center shadow p-4 mb-2  text-center  rounded ">
                <h3 className={style.content}>Sender Details</h3>
                <div className="col-sm-11 mt-4  ">
                  <select
                    onChange={handleFromChange}
                    className="form-select mb-2 text-center border border-2 border-info"
                    aria-label="Default select example"
                    value={customerfrom.from}
                    defaultValue={"default"}
                  >
                    <option value={"default"}>Open this select menu</option>
                    {props.items.map((customer, index) => {
                      return (
                        <option key={index} value={customer.name}>
                          {customer.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-sm-12 text-center mb-3 ">
              <div className=" row  justify-content-md-center text-center shadow p-4 mb-2 text-center  rounded ">
                <h3 className={style.content}>Receiver Details</h3>
                <div className="col-sm-11 mt-4">
                  <select
                    onChange={handleToChange}
                    className="form-select mb-2 text-center border border-2 border-info"
                    aria-label="Default select example"
                    value={customerto.to}
                    defaultValue={"default"}
                  >
                    <option value={"default"}>Open this select menu</option>
                    {props.items.map((customer, index) => {
                      return (
                        <option key={index} value={customer.name}>
                          {customer.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <div className="  d-grid justify-content-md-center text-center mb-3 ">
              <div className="   shadow p-1  text-center  rounded ">
                <div className="m-3 ">
                  <div className=" form-floating rounded rounded-3 border border-2 border-info ">
                    <input
                      onChange={handleAmountChange}
                      type="text"
                      className=" form-control text-center "
                      id="amount"
                      placeholder="Another input placeholder"
                    />
                    <label className="floatingTextarea">Balance</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-grid  justify-content-md-center mt-3   text-center">
            <button
              className=" btn pl-1  fs-4 btn-info  shadow  text-light"
              type="submit"
              value="Confirm"
              disabled={
                customeramount === "" ||
                customerfrom === "" ||
                customerto === ""
              }
            >
              Confirm
            </button>
          </div>
          <div className="mt-5"></div>
        </form>
        <div className="mt-5"></div>
      </div>
      <div className="mt-5"></div>
    </div>
  );
};

export default TransferMoney;
