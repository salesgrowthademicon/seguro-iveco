import "./Home.css";
import Carousel from "../components/Carousel";
import benefits from "../assets/vantagens.svg";
import risco1 from "../assets/risco-1-seguro.svg";
import risco2 from "../assets/risco-2-seguro.svg";
import React from "react";

const Home = () => {
  return (
    <div className="App">
      <div className="content">
        <div className="col">
          <img src={risco1} alt=""/>
        </div>
        <div className="middle-col">
          <p>
            Olá,{" "}
            <span style={{ textTransform: "uppercase" }}>
              Kaylane Guarino Santana
            </span>
            , Como você está?
          </p>
          <br />
          <p>
            Agora que você é um(a) consorciado(a) contemplado(a) no{" "}
            <span>Grupo: 660</span> e <span>Cota: 3325</span>, precisamos falar
            sobre algo importante para a sequência do nosso processo:
          </p>
          <br />
          <p>
            Para cumprir com a{" "}
            <span style={{ textTransform: "uppercase" }}>
              CLÁUSULA 36º, PARÁGRAFO 5º, CAPÍTULO V
            </span>
            , do regulamento do consórcio, faz-se necessário a inclusão do
            seguro de vida prestamista neste momento.
          </p>
          <br />
          <br />
          <h3>Por que é necessário a contratação do seguro?</h3>
          <p>
            O seguro tem a finalidade de garantir a liquidação do saldo devedor
            em caso de morte natural, morte acidental ou invalidez permanente
            total por acidente.
          </p>
          <br />
          <br />
          <h3 className="subtitle" style={{ color: "var(--secondary)" }}>
            Escolha entre as opções abaixo:
          </h3>
          <Carousel />
          <br />
          <br />
          <br />
          <h3>Vantagens:</h3>
          <div className="benefits">
            <div className="col-benefits">
              <div className="title">
                <div>
                  <p>
                    Mais
                    <br />
                    Segurança
                  </p>
                </div>
              </div>
              <p>
                Preservação do patrimônio adquirido para você e seus familiares
              </p>
            </div>
            <div className="col-benefits">
              <div className="title" style={{}}>
                <div>
                  <p
                    style={{
                      color: "var(--secondary)",
                      borderBottomColor: "var(--quaternary)",
                    }}
                  >
                    ASSISTÊNCIA
                    <br />
                    RESIDENCIAL
                  </p>
                </div>
              </div>
              <p>
                O Residencial é somente serviços emergenciais, hidráulico,
                elétrico e chaveiro.
              </p>
            </div>
            <div className="col-benefits">
              <div className="title">
                <div>
                  <p>
                    ASSISTÊNCIA
                    <br />
                    FUNERAL
                  </p>
                </div>
              </div>
              <p style={{ width: "75%" }}>
                Assistência funeral no valor de R$ 3 mil para o titular.
              </p>
            </div>
          </div>
          <img
            src={benefits}
            alt="Vantagens"
            style={{ width: "100%", height: 350 }}
          />
          <br />
          <br />
          <br />
        </div>
        <div className="col col-rigth">
          <img src={risco2} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Home;
