import styled from 'styled-components';
import SuccessfulPurchase from '../../assets/images/sucessfulPurchase.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const SuccessfulPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessfulPurchaseImage = styled.img.attrs({
  src: SuccessfulPurchase
})`
  height: 340px;

  @media (max-width: 767px) {
    height: 260px;
  }
`;

export const ReturnButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 15px 60px;
  }
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};

  @media (max-width: 767px) {
    font-size: 22px;
    width: 200px;
    text-align: center;
  }
`;