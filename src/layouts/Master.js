import React from 'react';
import Header from "../includes/Header";
import Footer from "../includes/Footer";

function Master({ children }) {
    return (
        <div>
        <Header/>
        <Footer/>
       </div>
    );
}

export default Master;