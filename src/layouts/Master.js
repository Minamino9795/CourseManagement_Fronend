import React from 'react';
import Header from "../includes/Header";
import Sidebar from "../includes/Sidebar";

function Master({children}) {
    return (
        <>
         
         <Header />
      { children }
      <Sidebar />

        </>
    );
}

export default Master;