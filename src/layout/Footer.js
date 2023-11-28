import React from "react";
import triangles from "../assets/triangulos-seguro.svg";
import './Footer.css';

const Footer = ({ onFooterClick }) => {
  return (
    <div className="content-footer">
      <img src={triangles} alt="" className="left-triangle" />
      <div className="footer" onClick={onFooterClick}>
        <p>Clique aqui para acessar as</p>
        <p>dúvidas frequentes</p>
      </div>
      <img src={triangles} alt="" className="right-triangle" />
    </div>
  );
};

export default Footer;