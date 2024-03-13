import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

interface CartItem {
  movie: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  quantity: number;
}

interface NavigationProps {
  cartItems?: CartItem[];
}

const Navigation: React.FC<NavigationProps> = ({ cartItems }) => {
  return (
    <S.Navigation>
      <Link to="/" state={{ cartItems }}>
        <S.WefitLogo />
      </Link>
      <Link to="/cart" state={{ cartItems }}>
        <S.CartWrapper>
          <S.CartInfo>
            <S.CartTitle>Meu Carrinho</S.CartTitle>
            <S.CartQuantity>
              {cartItems && cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
              itens
            </S.CartQuantity>
          </S.CartInfo>
          <S.CartIcon />
        </S.CartWrapper>
      </Link>
    </S.Navigation>
  );
};

export default Navigation;
