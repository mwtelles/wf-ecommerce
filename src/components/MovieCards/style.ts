import styled from 'styled-components';
import ShopCart from '../../assets/icons/shop_cart.svg'

const mobileBreakpoint = '768px';
const tabletBreakpoint = '1024px';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 20px;

  @media (max-width: ${tabletBreakpoint}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${mobileBreakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
  border-radius: 4px;
  gap: 15px;
`;

export const MovieImage = styled.img`
  height: 200px;
`;

export const ShopButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  padding: 14px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0 15px;

  &:active {
    background-color: ${props => props.theme.colors.success};
  }
`;
export const MovieTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};
`;
export const MoviePrice = styled.span`
  font-size: 23px;
  font-weight: 700;
  color: ${props => props.theme.colors.tertiary};
`;

export const ShopCartRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
`;

export const ShopCartQuantity = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const ShopCartIcon = styled.img.attrs({
  src: ShopCart
})`
  height: 18px;
`;