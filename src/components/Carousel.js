import React, { useState } from "react";
import "./Carousel.css"; // Estilo para o carrossel
import stars from "../assets/stars.png";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const cards = [
  { id: 1, title: "Opção 1", value: 219.98, descript: "Crédito + Taxa" },
  { id: 2, title: "Opção 2", value: 59.92, descript: "Saldo Devedor" },
  { id: 3, title: "Opção 3", value: 0, descript: "" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrossel-container">
      {currentIndex !== 0 && (
        <button className="seta seta-esquerda" onClick={goToPrevSlide}>
          <BiSolidChevronLeftCircle
            style={{ color: "var(--primary)", width: 50 }}
          />
        </button>
      )}

      <div className="carousel-scroll">
        <div className={`carousel-slide ${"active" + (currentIndex + 1)}`}>
          {cards.map((card, index) => (
            <div key={card.id} className={`card`}>
              {card.id === 1 ? <img src={stars} alt="" /> : ""}
              <h2 className={card.id === 3 ? 'title-last-card' : "title-card"}>{card.title}</h2>

              {card.id === 3 ? (
                <>
                  <div className="valor-numerico" style={{ marginTop: 15 }}>
                    <BsFillEmojiFrownFill style={{ width: 50, height: 50 }} />
                  </div>
                  <p style={{ textAlign: 'center', marginTop: 10 }}>Teve algum impedimento na contratação do seguro?</p>
                  <button style={{ marginBottom: 0 }}>Fale Conosco</button>
                </>
              ) : (
                <>
                  <div className="valor-numerico">
                    <p className="currency">R$</p>
                    <h2 className="amount">{Math.floor(card.value)}</h2>
                    <div className="decimal-container">
                      {card.value % 1 !== 0 && (
                        <p className="decimal">
                          {card.value.toFixed(2).split(".")[1]}
                        </p>
                      )}
                    </div>
                  </div>

                  <p>Valor em relação ao</p>
                  <span>{card.descript}</span>
                  <button>Assine o contrato agora</button>
                  <p className="descript">
                    Em caso de sinistro, a seguradora cobre o valor...
                    <span>(ler mais)</span>
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== cards.length - 1 && (
        <button className="seta seta-direita" onClick={goToNextSlide}>
          <BiSolidChevronRightCircle style={{ color: "var(--primary)" }} />
        </button>
      )}
    </div>
  );
};

export default Carousel;
