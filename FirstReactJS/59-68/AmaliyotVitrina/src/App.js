import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import BasketList from "./Components/BasketList";
import {ToastContainer} from "react-toastify";

function App (){
    return (
        <div>
            <ToastContainer />
            <Header />
            <Shop />
            <Footer />
        </div>
    )
}
export default App