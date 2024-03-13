import Navigation from '../../components/Navigation';
import SuccessfulPurchase from '../../components/SuccessfulPurchase';
import * as S from './style'

const PurchaseConfirmationPage = () => {
  return ( 
  <S.Container>
    <Navigation cartItems={[]} />
    <S.ContentContainer>
          <SuccessfulPurchase />
        </S.ContentContainer>
    </S.Container>
  );
};

export default PurchaseConfirmationPage;
