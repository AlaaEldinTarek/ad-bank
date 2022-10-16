import "./App.css";
import Header from "./Components/Header/Header";
import UsersList from "./Components/UsersList/UsersList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersData from "./Components/UsersData/UsersData";
import Footer from "./Components/Footer/Footer";
import TransferMoney from "./Components/TransferMoney/TransferMoney";
import HistoryList from "./Components/History/HistoryList";
import Homepage from "./Components/Home/Homepage";
import CustomersList from "./Components/UsersItem/CustomersItem";

function App() {
  const [customers, setCustomers] = useState([""]);
  

  useEffect(() => {
    axios.get("https://ad-bank.herokuapp.com/customers").then((response) => {
      if (response.data.length > 0) {
        setCustomers(response.data);
      }
    });
  }, []);

  const [transactions, setTransactions] = useState([""]);

  useEffect(() => {
    axios.get("https://ad-bank.herokuapp.com/transfer").then((response) => {
      if (response.data.length > 0) {
        setTransactions(response.data);
      }
    });
  }, [transactions]);


  

  return (
    <Router>
      <div className="container  mt-4 mb-4  p-0 shadow rounded rounded text-center ">
        <Header  />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Customers" element={<UsersList items={customers} />} />
          <Route element={<CustomersList items={customers} />} />
          <Route path="/Customers/:id" element={<UsersData />} />
          <Route
            path="/transfer"
            element={<TransferMoney items={customers} />}
          />
          <Route
            path="/history"
            element={<HistoryList item={transactions} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
