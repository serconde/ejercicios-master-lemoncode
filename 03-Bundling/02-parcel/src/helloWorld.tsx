import React from "react";
import logo from "./content/images/V_for_Vendetta_graffiti.svg.png";

export const HelloWorld = () => {
    return(
        <>
            <h1 className="title">Hello World!</h1>
            <img className="logo" src={logo} alt="Logo" />
        </>
    );
}