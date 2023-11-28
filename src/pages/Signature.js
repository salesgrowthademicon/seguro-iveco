import React, { useState } from "react";
import "./Signature.css";
import Modal from "../components/Modal";
import { formatarNomeCampo, formatarValorBRL } from "../utils/Formatter";
import risco1 from "../assets/risco-1-seguro.svg";
import risco2 from "../assets/risco-2-seguro.svg";

const questions = [
  "Considera-se atualmente em boas condições de saúde e em plena atividade de trabalho? Em caso negativo, explique.",
  "Tem qualquer deficiência de órgãos, membros ou sentidos? Especificar, inclusive o grau de deficiência.",
  "Sofre atualmente ou sofreu nos últimos cinco anos de alguma moléstia que o (a) tenha obrigado a consultar médicos, hospitalizar-se, submeter-se a intervenções cirúrgicas ou afastar-se de suas atividades normais de trabalho? Quando? Indique as moléstias e outros detalhes.",
  "Pratica rotineiramente algum esporte de risco (alpinismo e escaladas, asa delta, automobilismo, balonismo, bungee jump, mergulho, montanhismo, motociclismo, motonáutica, paraglaider e similares, parapente, pára-quedismo, planador e similares, ultraleve, voo acrobático, etc)? Em caso afirmativo detalhe o tipo de esporte e a frequência.",
  "É ou foi portador de: Tumor ou câncer? Doença coronariana? Acidente vascular cerebral (derrame cerebral)? Diabetes? Bronquite? Enfisema? Hepatites? Arritmia? Insuficiência cardiáca? Hipercolesterolemia (colesterol elevado), hipertrigliceridemia (triglicérides elevados) ou síncope (desmaios)?",
  "Usa ou usou nos últimos cinco anos algum medicamento de forma rotineira para tratamento? Em caso afirmativo, cite o(s) medicamento(s) e a(s) doença(s) que trata ou tratou.",
];

const Signature = ({ card }) => {
  const [showAdditionalInputsForm1, setShowAdditionalInputsForm1] = useState(
    Array(questions.length).fill(false)
  );
  const [showAdditionalInputsForm2, setShowAdditionalInputsForm2] = useState(
    Array(questions.length).fill(false)
  );
  const [selectedOptionsForm1, setSelectedOptionsForm1] = useState([
    "Não",
    ...Array(questions.length).fill(null),
  ]);
  const [selectedOptionsForm2, setSelectedOptionsForm2] = useState(
    Array(questions.length + 1).fill(null)
  );
  const [showModal, setShowModal] = useState(false);
  const [terms, setTerms] = useState(false);
  const [dataSecondHolder, setDataSecondHolder] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
  });

  const [describeReasonsForm1, setDescribeReasonsForm1] = useState(
    Array(questions.length + 1)
      .fill("")
      .map((_, index) => "")
  );

  const describeForm1Changed = describeReasonsForm1.reduce(
    (acc, item, index) => {
      acc[index + 1] = item;
      return acc;
    },
    {}
  );

  const [describeReasonsForm2, setDescribeReasonsForm2] = useState(
    Array(questions.length + 1)
      .fill("")
      .map((_, index) => "")
  );

  const describeForm2Changed = describeReasonsForm2.reduce(
    (acc, item, index) => {
      acc[index + 1] = item;
      return acc;
    },
    {}
  );

  const handleCheckboxChangeForm1 = (index, option) => {
    setSelectedOptionsForm1((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = option;
      return newOptions;
    });

    setShowAdditionalInputsForm1((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = index === 1 ? option === "Não" : option === "Sim";
      return newInputs;
    });
  };

  const handleCheckboxChangeForm2 = (index, option) => {
    setSelectedOptionsForm2((prevOptions) => {
      const newOptions = [...prevOptions];
      newOptions[index] = option;
      return newOptions;
    });

    setShowAdditionalInputsForm2((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = index === 1 ? option === "Não" : option === "Sim";
      return newInputs;
    });
  };

  const handleDescribeReasonChangeForm1 = (index, value) => {
    setDescribeReasonsForm1((prevReasons) => {
      const newReasons = [...prevReasons];
      newReasons[index] = value;
      return newReasons;
    });
  };

  const handleDescribeReasonChangeForm2 = (index, value) => {
    setDescribeReasonsForm2((prevReasons) => {
      const newReasons = [...prevReasons];
      newReasons[index] = value;
      return newReasons;
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="content-signature">
        <div className="col">
          <img src={risco1} alt="" />
        </div>
        <div className="middle-col-signature">
          <div className="title-signature">
            <h2>Contratação Seguro Prestamista</h2>
            <p>
              Chegou a hora de proteger seu investimento. O seguro prestamista é
              uma forma de se resguardar caso imprevistos aconteçam.{" "}
              <span>Para contratar o seguro, siga os passos abaixo.</span>
            </p>
          </div>
          <h2>Sua cota possui mais de um titular?</h2>
          <div className="checkbox-container">
            <div
              className={`custom-checkbox ${
                selectedOptionsForm1[0] === "Sim" ? "checked" : ""
              }`}
              onClick={() => handleCheckboxChangeForm1(0, "Sim")}
            ></div>
            <label onClick={() => handleCheckboxChangeForm1(0, "Sim")}>
              Sim
            </label>
            <div
              className={`custom-checkbox ${
                selectedOptionsForm1[0] === "Não" ? "checked" : ""
              }`}
              onClick={() => handleCheckboxChangeForm1(0, "Não")}
            ></div>
            <label onClick={() => handleCheckboxChangeForm1(0, "Não")}>
              Não
            </label>
          </div>

          {selectedOptionsForm1[0] === "Sim" ? (
            <div className="second-holder-form">
              <h2>
                Informe os dados do <u>segundo titular:</u>
              </h2>
              <div>
                <input
                  type="text"
                  placeholder="Nome completo"
                  style={{ width: "30%" }}
                  onChange={(e) =>
                    setDataSecondHolder({
                      ...dataSecondHolder,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  style={{ width: "50%" }}
                  onChange={(e) =>
                    setDataSecondHolder({
                      ...dataSecondHolder,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <input
                  placeholder="Telefone"
                  style={{ width: "40%" }}
                  onChange={(e) =>
                    setDataSecondHolder({
                      ...dataSecondHolder,
                      phone: e.target.value,
                    })
                  }
                />
                <input
                  placeholder="CPF"
                  style={{ width: "40%" }}
                  onChange={(e) =>
                    setDataSecondHolder({
                      ...dataSecondHolder,
                      cpf: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          ) : null}

          <div className="form">
            {questions.map((question, index) => (
              <div key={index} className="content-questions">
                <p>{`${index + 1}º pergunta: ${question}`}</p>
                <div className="checkbox-container">
                  <div
                    className={`custom-checkbox ${
                      selectedOptionsForm1[index + 1] === "Sim" ? "checked" : ""
                    }`}
                    onClick={() => handleCheckboxChangeForm1(index + 1, "Sim")}
                  ></div>
                  <label
                    onClick={() => handleCheckboxChangeForm1(index + 1, "Sim")}
                  >
                    Sim
                  </label>
                  <div
                    className={`custom-checkbox ${
                      selectedOptionsForm1[index + 1] === "Não" ? "checked" : ""
                    }`}
                    onClick={() => handleCheckboxChangeForm1(index + 1, "Não")}
                  ></div>
                  <label
                    onClick={() => handleCheckboxChangeForm1(index + 1, "Não")}
                  >
                    Não
                  </label>
                </div>
                {showAdditionalInputsForm1[index + 1] && (
                  <input
                    type="text"
                    placeholder="Descreva o motivo..."
                    className="input-describe"
                    value={describeReasonsForm1[index]}
                    onChange={(e) =>
                      handleDescribeReasonChangeForm1(index, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </div>

          {selectedOptionsForm1[0] === "Sim" ? (
            <div className="form-second-holder">
              <p className="atention">
                Atenção!!!
                <br />
                Você deve preencher estas informações de acordo com a situação
                de saúde do segundo titular.
              </p>
              <input
                type="checkbox"
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label>Estou ciente destas informações.</label>
              {questions.map((question, index) => (
                <div key={index} className="content-questions">
                  <p>{`${index + 1}º pergunta: ${question}`}</p>
                  <div className="checkbox-container">
                    <div
                      className={`custom-checkbox ${
                        selectedOptionsForm2[index + 1] === "Sim"
                          ? "checked"
                          : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChangeForm2(index + 1, "Sim")
                      }
                    ></div>
                    <label
                      onClick={() =>
                        handleCheckboxChangeForm2(index + 1, "Sim")
                      }
                    >
                      Sim
                    </label>
                    <div
                      className={`custom-checkbox ${
                        selectedOptionsForm2[index + 1] === "Não"
                          ? "checked"
                          : ""
                      }`}
                      onClick={() =>
                        handleCheckboxChangeForm2(index + 1, "Não")
                      }
                    ></div>
                    <label
                      onClick={() =>
                        handleCheckboxChangeForm2(index + 1, "Não")
                      }
                    >
                      Não
                    </label>
                  </div>
                  {showAdditionalInputsForm2[index + 1] && (
                    <input
                      type="text"
                      placeholder="Descreva o motivo..."
                      className="input-describe"
                      value={describeReasonsForm2[index]}
                      onChange={(e) =>
                        handleDescribeReasonChangeForm2(index, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}

          <h2>Opção escolhida:</h2>
          <div className="tabela-container">
            <table>
              <tbody>
                <tr>
                  <td style={{ fontWeight: "bold", color: "var(--primary)" }}>
                    Plano selecionado:
                  </td>
                  <td>{formatarNomeCampo(card.descript)}</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: "bold", color: "var(--primary)" }}>
                    Valor:
                  </td>
                  <td>{formatarValorBRL(card.value)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="information">
            <p>
              A contratação do Seguro Prestamista está sujeita à análise por
              parte da seguradora.
            </p>
          </div>
          <button className="button-signature" onClick={() => openModal()}>
            Assine o contrato agora
          </button>
          <p className="text">
            Ao clicar em "Assine o contrato agora", você será redirecionado para
            um ambiente de assinatura digital. A assinatura digital equivale a
            uma assinatura de próprio punho. É uma tecnologia que utiliza a
            criptografia e vincula no certificado digital do documento
            eletrônico que está sendo assinado. Assim, dá garantias de
            integridade e autenticidade.
          </p>
        </div>
        <div className="col col-rigth">
          <img src={risco2} alt="" />
        </div>
      </div>
      <Modal
        showModal={showModal}
        onClose={closeModal}
        question={selectedOptionsForm1}
        terms={terms}
        data={dataSecondHolder}
        questionSecondHolder={selectedOptionsForm2}
        visibleDescribeReasonsForm1={showAdditionalInputsForm1}
        visibleDescribeReasonsForm2={showAdditionalInputsForm2}
        describeReasonsForm1={describeForm1Changed}
        describeReasonsForm2={describeForm2Changed}
      />
    </div>
  );
};

export default Signature;
