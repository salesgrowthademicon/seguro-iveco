import React from "react";
import "./ModalContact.css";
import { CgCloseO } from "react-icons/cg";

const ModalContact = ({ showModal, onClose }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-contact-content">
        <div className="content-close">
          <CgCloseO
            style={{ color: "var(--primary)", cursor: "pointer" }}
            onClick={() => onClose()}
          />
        </div>
        <h1>Fale conosco</h1>
        <p>Entre em contato com o e-mail:</p>
        <span>seguros@ademicon.com.br</span>
      </div>
    </div>
  );
};

export default ModalContact;
