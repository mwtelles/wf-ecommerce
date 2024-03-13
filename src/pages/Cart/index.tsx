import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import Navigation from "../../components/Navigation";
import { useState } from "react";
import Grid from "../../components/Grid";
import useMediaQuery from "../../hooks/useMediaQuery";
import NotFound from "../../components/NotFound";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItemProps {
  movie: Movie;
  quantity: number;
}

const CartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { cartItems: CartItemProps[] } | undefined;
  const [cartItems, setCartItems] = useState<CartItemProps[]>(
    state?.cartItems || []
  );

  const handleRemoveFromCart = (id: number) => {
    setCartItems((currentCartItems) =>
      currentCartItems.filter((item) => item.movie.id !== id)
    );
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((currentCartItems) =>
      currentCartItems.map((item) => {
        if (item.movie.id === id) {
          return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const handleFinishCart = () => {
    navigate("/purchase-confirmation");
  };

  const handleGoToHomePage = () => {
    navigate("/");
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  const total =
    cartItems &&
    cartItems
      .reduce((acc, item) => acc + item.movie.price * item.quantity, 0)
      .toFixed(2)
      .replace(".", ",");
  return (
    <S.Container>
      <Navigation cartItems={cartItems || []} />
      <S.ContentContainer>
        {cartItems.length === 0 ? (
            <NotFound
              onReload={handleGoToHomePage}
              title="Seu carrinho está vazio"
              buttonText="Retornar"
            />
        ) : (
          <>
            <Grid
              items={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveFromCart}
            />
            <S.TotalContainer>
              {isMobile ? (
                <>
                  <S.Wrapper>
                    <S.Label>Total</S.Label>
                    <S.Total>{`R$ ${total}`}</S.Total>
                  </S.Wrapper>
                  <S.CheckoutButton onClick={handleFinishCart}>
                    Finalizar compra
                  </S.CheckoutButton>
                </>
              ) : (
                <>
                  <S.CheckoutButton onClick={handleFinishCart}>
                    Finalizar compra
                  </S.CheckoutButton>
                  <S.Wrapper>
                    <S.Label>Total</S.Label>
                    <S.Total>{`R$ ${total}`}</S.Total>
                  </S.Wrapper>
                </>
              )}
            </S.TotalContainer>
          </>
        )}
      </S.ContentContainer>
    </S.Container>
  );
};

export default CartPage;
