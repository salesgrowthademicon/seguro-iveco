import React from "react";
import Logo from "../assets/logo.svg";
import './Header.css';

const Header = () => {
    return(
        <div className="content-header">
            <img src={Logo} alt="Ademicon"/>
        </div>
    );
}

export default Header;