// import { Container, Text, Image } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from 'react';
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, [])
  
  return (
    <Layout title='Favorites Pokemons'>
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
