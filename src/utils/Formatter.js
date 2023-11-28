export const formatarNomeCampo = (camp) => {
  switch (camp) {
    case "credito_taxa":
      return "Crédito + Taxa";
    case "saldo_devedor":
      return "Saldo devedor";
    default:
      return camp;
  }
};

export const formatarValorBRL = (valor) => {
  const formato = { style: "currency", currency: "BRL" };
  return valor.toLocaleString("pt-BR", formato);
};
