import styled from "styled-components";
import Cart from "../../assets/icons/Cart.svg";
import Logo from "../../assets/images/logo.svg";

const mobileBreakpoint = "768px";

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const WefitLogo = styled.img.attrs({
  src: Logo,
})`
  width: 150px;
  height: 40px;
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0 15px;
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
`;

export const CartTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;

export const CartQuantity = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: right;
  text-decoration: none;
  color: ${(props) => props.theme.colors.gray};

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
  }
`;

export const CartIcon = styled.img.attrs({
  src: Cart,
})`
  width: 35px;
  height: 35px;
`;
