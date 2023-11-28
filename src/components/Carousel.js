import stars from "../assets/stars.png";
import React, { useState } from "react";
import "./Carousel.css";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { formatarNomeCampo } from "../utils/Formatter";

const Carousel = ({ onClick, cards, openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setSelectedCard(null);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    setSelectedCard(null);
  };

  const handleSignature = (card) => {
    onClick(card);
  };

  const toggleReadMore = (cardId) => {
    setSelectedCard(selectedCard === cardId ? null : cardId);
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
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard === card.id ? "card-read" : ""}`}
            >
              {selectedCard === card.id ? (
                <>
                  <div
                    className="icon-close-read-more"
                    onClick={() => toggleReadMore(card.id)}
                  >
                    <CgCloseO />
                  </div>
                  <p className={`content-see-more animate-page-turn`}>
                    <p>
                      Em caso de sinistro, a seguradora cobre o valor do{" "}
                      <span>{formatarNomeCampo(card.descript)}</span>. É
                      deduzido o saldo devedor da cota e o saldo remanescente é
                      pago ao beneficiário.
                    </p>
                    <br />
                    Nesta opção, o valor mensal é fixo com ajuste anual. O bem
                    será quitado e o beneficiário receberá os valores já pagos.
                  </p>
                </>
              ) : (
                <>
                  {card.id === 1 ? <img src={stars} alt="" /> : ""}
                  <h2
                    className={card.id === 3 ? "title-last-card" : "title-card"}
                  >
                    {card.title}
                  </h2>

                  {card.id === 3 ? (
                    <>
                      <div className="valor-numerico" style={{ marginTop: 15 }}>
                        <BsFillEmojiFrownFill
                          style={{ width: 50, height: 50 }}
                        />
                      </div>
                      <p style={{ textAlign: "center", marginTop: 10 }}>
                        Teve algum impedimento na contratação do seguro?
                      </p>
                      <button
                        style={{ marginBottom: 0 }}
                        onClick={() => openModal()}
                      >
                        Fale Conosco
                      </button>
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
                      <span>{formatarNomeCampo(card.descript)}</span>
                      <button onClick={() => handleSignature(card)}>
                        Assine o contrato agora
                      </button>
                      <p
                        className="descript"
                        onClick={() => toggleReadMore(card.id)}
                      >
                        Em caso de sinistro, a seguradora cobre o valor...
                        <span>(ler mais)</span>
                      </p>
                    </>
                  )}
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
