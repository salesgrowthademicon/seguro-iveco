import React from "react";
import risco1 from "../assets/risco-1-seguro.svg";
import risco2 from "../assets/risco-2-seguro.svg";
import './Error.css';

const Error = () => {
  return (
    <div className="content">
      <div className="col">
        <img src={risco1} alt="" style={{ width: 150 }} />
      </div>
      <div className="content-error">
        <h1 style={{ color: "var(--primary)" }}>Token inválido</h1>
        <p style={{ margin: 0 }}>Entre em contato para mais informações.</p>
        <p style={{ margin: 0, fontWeight: "bold", color: "var(--primary)" }}>
          Entre em contato (41) 99670-7812.
        </p>
      </div>
      <div className="col col-rigth">
        <img src={risco2} alt="" style={{ width: 150 }}/>
      </div>
    </div>
  );
};

export default Error;
