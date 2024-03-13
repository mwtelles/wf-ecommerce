import * as S from "./style";

interface Movie {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem {
  movie: Movie;
  quantity: number;
}

interface MovieCardsProps {
  data: Movie[];
  addToCart: (movie: Movie) => void;
  cartItems: CartItem[];
}

const MovieCards = ({ data, addToCart, cartItems }: MovieCardsProps) => {
  const getItemQuantity = (id: number) => {
    const item = cartItems.find((item) => item.movie.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <S.Container>
      {data.map((movie: Movie) => (
        <S.MovieCard key={movie.id}>
          <S.MovieImage src={movie.image} alt={movie.title} />
          <S.MovieTitle>{movie.title}</S.MovieTitle>
          <S.MoviePrice>R$ {movie.price.toFixed(2).replace(".", ",")}</S.MoviePrice>
          <S.ShopButton onClick={() => addToCart(movie)}>
            <S.ShopCartRow>
              <S.ShopCartIcon />
              <S.ShopCartQuantity>{getItemQuantity(movie.id)}</S.ShopCartQuantity>
            </S.ShopCartRow>
            Adicionar ao carrinho
          </S.ShopButton>
        </S.MovieCard>
      ))}
    </S.Container>
  );
};

export default MovieCards;
