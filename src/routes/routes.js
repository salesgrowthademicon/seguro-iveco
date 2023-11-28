import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/Error";
import Status from "../pages/Status";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import FAQ from "../components/FAQ";
import Signature from "../pages/Signature";

const cards = [
  {
    id: 1,
    act: "dps",
    title: "Opção 1",
    value: 219.98,
    descript: "credito_taxa",
  },
  {
    id: 2,
    act: "dps",
    title: "Opção 2",
    value: 59.92,
    descript: "saldo_devedor",
  },
  { id: 3, act: "dps", title: "Opção 3", value: 0, descript: "" },
];

const AppRouter = () => {
  const navigate = useNavigate();
  const key = "12345678";
  const location = useLocation();
  const [token, setToken] = useState("");
  const status = "não assinado";
  const [error, setError] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);
  const [signaturePage, setSignaturePage] = useState(false);
  const [cardClicked, setCardClicked] = useState("");

  useEffect(() => {
    token !== key ? setError(true) : setError(false);
  }, [token]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const seguro = params.get("seguro");
    setToken(seguro);

    if (signaturePage === false) {
      if (!seguro) {
        navigate(`/?seguro=${key}`);
      }
    } else if (signaturePage === true && location.pathname !== "/signature/") {
      navigate(`/?seguro=${key}`);
      setSignaturePage(false);
    }
  }, [navigate, key, location.search, signaturePage, location.pathname]);

  const handleFooterClick = () => {
    setFaqVisible(!faqVisible);
  };

  const handleSignature = (card) => {
    setCardClicked(card);
    setSignaturePage(true);
    navigate(
      `/signature/?seguro=${key}&act=${card.act}&opcao=${card.descript}`
    );
  };

  return (
    <>
      <Header />
      <Routes>
        {signaturePage ? (
          <Route path="/signature" element={<Signature card={cardClicked} />} />
        ) : error ? (
          <Route path="/" element={<ErrorPage />} />
        ) : !error && status !== "assinado" ? (
          <Route
            path="/"
            element={
              <Home onClick={(card) => handleSignature(card)} cards={cards} />
            }
          />
        ) : (
          <Route path="/" element={<Status />} />
        )}
      </Routes>
      <Footer onFooterClick={() => handleFooterClick()} />
      {faqVisible && <FAQ onClose={handleFooterClick} />}
    </>
  );
};

export default AppRouter;
