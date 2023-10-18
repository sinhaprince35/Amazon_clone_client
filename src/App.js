import "./App.css";
import Buynow from "./Components/Buynow/Buynow";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import MainComp from "./Components/Home/MainComp";
import Newnav from "./Components/Newnav/Newnav";
import SignIn from "./Components/Signup_Signin/Sign_in";
import SignUp from "./Components/Signup_Signin/Sign_up";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h3>Loading...</h3>
        </div>
      )}
    </>
  );
}

export default App;
