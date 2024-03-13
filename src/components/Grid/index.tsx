import React from "react";
import * as S from "./style";
import useMediaQuery from "../../hooks/useMediaQuery";
import QuantityInput from "../QuantityInput";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItemData {
  movie: Movie;
  quantity: number;
}

interface GridProps {
  items: CartItemData[];
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

const Grid: React.FC<GridProps> = ({ items, onRemove, onQuantityChange }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <S.GridContainer>
      <S.GridHeader>
        <S.HeaderItem>Produto</S.HeaderItem>
        <S.HeaderItem>QTD</S.HeaderItem>
        <S.HeaderItem>Subtotal</S.HeaderItem>
        <S.HeaderItem></S.HeaderItem>
      </S.GridHeader>
      <S.GridBody>
        {items.map((item) => (
          <S.GridItem key={item.movie.id}>
            {isMobile ? (
              <>
                <S.ProductDetail>
                  <S.MovieColumn>
                    <S.ProductImage
                      src={item.movie.image}
                      alt={item.movie.title}
                    />
                  </S.MovieColumn>
                  <S.MovieColumn>
                    <S.ProductDetail>
                      <S.ProductName>{item.movie.title}</S.ProductName>
                      <S.ProductPrice>
                        R$ {item.movie.price.toFixed(2).replace(".", ",")}
                      </S.ProductPrice>
                      <S.Action>
                        <S.TrashIcon onClick={() => onRemove(item.movie.id)} />
                      </S.Action>
                    </S.ProductDetail>
                    <S.ProductDetail>
                      <QuantityInput
                        quantity={item.quantity}
                        onIncrease={() =>
                          onQuantityChange(item.movie.id, item.quantity + 1)
                        }
                        onDecrease={() =>
                          onQuantityChange(item.movie.id, item.quantity - 1)
                        }
                        onChange={(newQuantity) =>
                          onQuantityChange(item.movie.id, newQuantity)
                        }
                      />
                      <S.Column>
                        <S.ProductSubtotal>Subtotal</S.ProductSubtotal>
                        <S.Subtotal>
                          R${" "}
                          {(item.movie.price * item.quantity)
                            .toFixed(2)
                            .replace(".", ",")}
                        </S.Subtotal>
                      </S.Column>
                    </S.ProductDetail>
                  </S.MovieColumn>
                </S.ProductDetail>
              </>
            ) : (
              <>
                <S.ProductDetail>
                  <S.ProductImage
                    src={item.movie.image}
                    alt={item.movie.title}
                  />
                  <S.ItemColumn>
                    <S.ProductName>{item.movie.title}</S.ProductName>
                    <S.ProductPrice>
                      R$ {item.movie.price.toFixed(2).replace(".", ",")}
                    </S.ProductPrice>
                  </S.ItemColumn>
                </S.ProductDetail>
                <QuantityInput
                  quantity={item.quantity}
                  onIncrease={() =>
                    onQuantityChange(item.movie.id, item.quantity + 1)
                  }
                  onDecrease={() =>
                    onQuantityChange(item.movie.id, item.quantity - 1)
                  }
                  onChange={(newQuantity) =>
                    onQuantityChange(item.movie.id, newQuantity)
                  }
                />
                <S.Subtotal>
                  R${" "}
                  {(item.movie.price * item.quantity)
                    .toFixed(2)
                    .replace(".", ",")}
                </S.Subtotal>
                <S.Action>
                  <S.TrashIcon onClick={() => onRemove(item.movie.id)} />
                </S.Action>
              </>
            )}
          </S.GridItem>
        ))}
      </S.GridBody>
    </S.GridContainer>
  );
};

export default Grid;
