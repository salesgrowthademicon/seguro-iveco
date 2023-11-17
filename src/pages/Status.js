import React from "react";
import sucsses from "../assets/sucesso.png";
import risco1 from "../assets/risco-1-seguro.svg";
import risco2 from "../assets/risco-2-seguro.svg";
import "./Status.css";

const Status = () => {
  return (
    <div className="content">
        <div className="col">
        <img src={risco1} alt="" style={{ width: 150 }} />
      </div>
      <div className="App-status">
        <h1>Seu Seguro já esta assinado ;)</h1>
        <p className="message">
          Seu seguro para o <span>grupo 420</span>, <span>cota 1546</span> está
          assinado.
        </p>
        <p className="message">
          Em caso de dúvidas sobre a cobertura, entre em contato (41)
          99670-7812.
        </p>
        <img src={sucsses} alt="" />
      </div>
      <div className="col col-rigth">
        <img src={risco2} alt="" style={{ width: 150 }}/>
      </div>
    </div>
  );
};

export default Status;
