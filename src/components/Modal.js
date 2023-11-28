import React from "react";
import "./Modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import gif from "../assets/loader.gif";
import { useEffect } from "react";

const Modal = ({
  showModal,
  onClose,
  question,
  terms,
  data,
  questionSecondHolder,
  visibleDescribeReasonsForm1,
  visibleDescribeReasonsForm2,
  describeReasonsForm1,
  describeReasonsForm2,
}) => {
  const firstNullIndex = question.findIndex((item) => item === null);
  const questionSecondHolderIndex = questionSecondHolder
    .slice(1)
    .findIndex((item) => item === null);

  const dataNotFilledInKey = Object.keys(data).find((key) => data[key] === "");

  const describeReasonsForm2NotFilledIndex = visibleDescribeReasonsForm2
    .map((item, index) => (item === true ? index : undefined))
    .filter((index) => index !== undefined);

  const emptyValuesIndexes = visibleDescribeReasonsForm1
    .map((item, index) => (item === true ? index : undefined))
    .filter(
      (index) => index !== undefined && describeReasonsForm1[index] === ""
    );

  const emptyValuesIndexesForm2 = visibleDescribeReasonsForm2
    .map((item, index) => (item === true ? index : undefined))
    .filter(
      (index) => index !== undefined && describeReasonsForm2[index] === ""
    );

  const getDynamicMessage = (index) => `Você deve informar um motivo para sua resposta da ${index}º pergunta.`;

  const renderAttentionSection = () => (
    <>
      <IoIosCloseCircleOutline className="icon" />
      <h1>Atenção</h1>
    </>
  );

  const renderTermsSection = () => (
    <p>
      Você deve informar que está ciente sobre a responsabilidade pelos dados informados do segundo titular.
    </p>
  );

  const renderMissingDataSection = () => (
    <p>
      Você deve preencher o{" "}
      {dataNotFilledInKey === "name"
        ? "nome"
        : dataNotFilledInKey === "email"
        ? "e-mail"
        : dataNotFilledInKey === "phone"
        ? "telefone"
        : "CPF"}{" "}
      do duplo titular.
    </p>
  );

  const renderMissingAnswerSection = () => (
    <p>
      Você deve informar uma resposta para a {questionSecondHolderIndex + 1}º pergunta do segundo titular.
    </p>
  );

  const renderDynamicMessageSection = (index) => (
    <p>{getDynamicMessage(index)}</p>
  );

  const renderGeneratingContractSection = () => (
    <div className="ok">
      <img src={gif} alt="" />
      <h2>Gerando Contrato</h2>
      <p>Em instantes você será direcionado para o contrato.</p>
    </div>
  );

  useEffect(() => {
    if (
      (question[0] === "Sim" &&
        firstNullIndex === -1 &&
        questionSecondHolderIndex === -1 &&
        terms === true &&
        describeReasonsForm2NotFilledIndex !== -1) ||
      (question[0] === "Não" && firstNullIndex === -1)
    ) {
      const timeoutId = setTimeout(() => {
        onClose();
        window.location.href =
          "https://na4.docusign.net/Signing/?insession=1&ti=d3e74a526e594798afda97a524408afe";
      }, 5000);

      return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
    }
  }, [
    question,
    firstNullIndex,
    questionSecondHolderIndex,
    terms,
    describeReasonsForm2NotFilledIndex,
    onClose,
  ]);

  const renderDefaultSection = () => (
    <p>Você deve informar uma resposta para a {firstNullIndex}º pergunta.</p>
  );

  const renderOkButton = () => (
    <button onClick={() => onClose()}>OK ;)</button>
  );

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        {(question[0] === "Sim" && firstNullIndex === -1 && questionSecondHolderIndex === -1 && terms === true && emptyValuesIndexesForm2[0] === undefined) ||
        (question[0] === "Não" && firstNullIndex === -1 && emptyValuesIndexes[0] === undefined) ? (
          ""
        ) : (
          renderAttentionSection()
        )}
        {!terms && question[0] === "Sim" ? (
          renderTermsSection()
        ) : question[0] === "Sim" &&
          (data.name === "" || data.email === "" || data.phone === "" || data.cpf === "") ? (
          renderMissingDataSection()
        ) : question[0] === "Sim" && firstNullIndex === -1 && questionSecondHolderIndex !== -1 ? (
          renderMissingAnswerSection()
        ) : emptyValuesIndexes[0] !== undefined ? (
          renderDynamicMessageSection(emptyValuesIndexes[0])
        ) : question[0] === "Sim" &&
          emptyValuesIndexesForm2[0] !== undefined ? (
          renderDynamicMessageSection(emptyValuesIndexesForm2[0])
        ) : (question[0] === "Sim" &&
            firstNullIndex === -1 &&
            questionSecondHolderIndex === -1 &&
            terms === true &&
            describeReasonsForm2NotFilledIndex !== -1) ||
          (question[0] === "Não" && firstNullIndex === -1) ? (
          renderGeneratingContractSection()
        ) : (
          renderDefaultSection()
        )}
        {(question[0] === "Sim" &&
          firstNullIndex === -1 &&
          questionSecondHolderIndex === -1 &&
          terms === true &&
          emptyValuesIndexesForm2[0] === undefined) ||
        (question[0] === "Não" && firstNullIndex === -1 && emptyValuesIndexes[0] === undefined) ? (
          ""
        ) : (
          renderOkButton()
        )}
      </div>
    </div>
  );
};

export default Modal;
