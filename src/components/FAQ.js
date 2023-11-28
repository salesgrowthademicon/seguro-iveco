import React, { useState } from "react";
import "./FAQ.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp  } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";

const FAQ = ({ onClose }) => {
  const faqData = [
    {
      question: "O que é o seguro prestamista Ademicon?",
      answer:
        "É a proteção do seu patrimônio, que garante a liquidação do saldo devedor do Consórcio no caso em que o titular da cota venha a sofrer um dos eventos cobertos pela apólice (morte natural, morte acidental e invalidez permanente e total por acidente).",
    },
    {
      question: "É obrigatório contratar o seguro?",
      answer:
        "Após a contemplação, para se fazer cumprir com a CLÁUSULA 36º, PARÁGRAFO 5º, CAPÍTULO V, do regulamento do consórcio, faz-se necessário a inclusão do seguro de vida prestamista.",
    },
    {
      question: "Qual é a seguradora?",
      answer:
        "O Seguro Prestamista Ademicon é realizado em parceria com a seguradora Previsul.",
    },
    {
      question: "Benefícios do seguro prestamista",
      answer:
        "Segurança e tranquilidade de saber que na hipótese de sinistro coberto, o saldo devedor da cota será quitado sem o risco de inadimplência ou execução do imóvel adquirido. •  O valor do seguro mensal não é baseado na idade do cliente (porém na data de encerramento do grupo a idade não pode ser superior a 74 anos, 11 meses e 29 dias). •Não há aumento de valor mensal em virtude de reenquadramento por faixa etária.",
    },
    {
      question: "Como funciona a cobrança?",
      answer:
        "O valor do seguro é incorporado diretamente nas prestações mensais do consórcio.",
    },
    {
      question: "Como é feito o cálculo do valor do seguro?",
      answer:
        "O valor do seguro acrescido à sua parcela será de 0,038%, calculado sobre o crédito + taxa administrativa (OPÇÃO 1) ou sobre o saldo devedor (OPÇÃO 2), conforme a sua escolha.",
    },
    {
      question: "O que eu faço em caso de sinistro?",
      answer:
        "O primeiro passo é entrar em contato com o departamento de Seguros Ademicon através do e-mail: seguros@ademicon.com.br, para comunicar a ocorrência, com as seguintes informações: •  Grupo/Cota; •  Nome do consorciado; •  Certidão de Óbito; •  Documento pessoal do Consorciado (CPF/RG); •  Documento do familiar que irá acompanhar o processo (CPF/RG).",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderAnswer = (answer) => {
    if (answer.includes("•")) {
      const listItems = answer.split("•").map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ));
      if (answer.startsWith("O primeiro passo é entrar em contato")) {
        return (
          <div>
            <p>{listItems[0]}</p>
            <ul>{listItems.slice(1)}</ul>
          </div>
        );
      }
      return <ul>{listItems}</ul>;
    }
    
    return <p>{answer}</p>;
  };


  return (
    <div className="faq-overlay">
      <div className="faq-container" onClick={(e) => e.stopPropagation()}>
        <div className="content-title">
          <h2>Dúvidas frequentes</h2>
          <CgCloseO style={{ color: "var(--primary)", cursor: "pointer" }} onClick={() => onClose()} />
        </div>
        <ul className="faq-list">
          {faqData.map((item, index) => (
            <li
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                {item.question}
                {activeIndex === index ? (
                  <MdKeyboardArrowUp
                    style={{ color: "var(--primary)", width: 30, height: 30, fontWeight: 'bold' }}
                  />
                ) : (
                  <MdKeyboardArrowDown
                    style={{ color: "var(--primary)", width: 30, height: 30, fontWeight: 'bold' }}
                  />
                )}
              </div>
              <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
                {renderAnswer(item.answer)}
              </div>
            </li>
          ))}
        </ul>
        <p>
          Ainda está com dúvidas? Entre em contato com a gente:{" "}
          <span>seguros@ademicon.com.br</span>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
