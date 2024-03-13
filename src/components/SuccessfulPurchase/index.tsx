import { useNavigate } from "react-router-dom";
import * as S from "./style";

const SuccessfulPurchase = () => {

  const navigate = useNavigate();

  const handleGoBackToHomePage = () => {
    navigate('/');
  }

  return (
    <S.Container>
        <S.Title>Compra realizada com sucesso!</S.Title>
      <S.SuccessfulPurchaseContainer>
        <S.SuccessfulPurchaseImage />
      </S.SuccessfulPurchaseContainer>
      <S.ReturnButton onClick={handleGoBackToHomePage}>
        Voltar
      </S.ReturnButton>
    </S.Container>
  );
};

export default SuccessfulPurchase;
