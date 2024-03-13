import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import * as S from "./style";
import Api from "../../services/api";
import NotFound from "../../components/NotFound";
import MovieCards from "../../components/MovieCards";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/Navigation";

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

const HomePage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const state = location.state as { cartItems: CartItem[] } | undefined;
  const [cartItems, setCartItems] = useState<CartItem[]>(state?.cartItems || []);

  const fetchProductsData = async () => {
    try {
      const responseData = await Api.get("/products");
      setData(responseData.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const handleReload = () => {
    setLoading(true);
    fetchProductsData();
  };

  const addToCart = (selectedMovie: Movie) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(item => item.movie.id === selectedMovie.id);
      if (itemExists) {
        return prevItems.map(item => 
          item.movie.id === selectedMovie.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { movie: selectedMovie, quantity: 1 }];
      }
    });
  };           

  return (
    <S.Container>
      <Navigation cartItems={cartItems} />
      {loading ? (
        <Loading />
      ) : error ? (
        <S.NoContentContainer>
          <NotFound onReload={handleReload} title="Parece que não há nada por aqui :(" buttonText="Retornar" />
        </S.NoContentContainer>
      ) : (
        <S.ContentContainer>
          <MovieCards data={data} addToCart={addToCart} cartItems={cartItems} />
        </S.ContentContainer>
      )}
    </S.Container>
  );
};

export default HomePage;
