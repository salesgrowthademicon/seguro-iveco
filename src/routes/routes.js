import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/Error";
import Status from "../pages/Status";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import FAQ from '../components/FAQ';

const AppRouter = () => {
  const navigate = useNavigate();
  const key = "12345678";
  const location = useLocation();
  const [token, setToken] = useState("");
  const status = "assinado";
  const [error, setError] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  useEffect(() => {
    token !== key ? setError(true) : setError(false);
  }, [token]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const seguro = params.get("seguro");
    setToken(seguro);

    if (!seguro) {
      navigate(`/?seguro=${key}`);
    }
  }, [navigate, key, location.search]);


  const handleFooterClick = () => {
    setFaqVisible(!faqVisible);
  };



  return (
    <>
      <Header />
      <Routes>
        {error ? (
          <Route path="/" element={<ErrorPage />} />
        ) : !error && status !== "assinado" ? (
          <Route path="/" element={<Home />} />
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
