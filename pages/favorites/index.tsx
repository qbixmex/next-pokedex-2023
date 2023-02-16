import { useState, useEffect } from 'react';
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritesPokemons } from '../../components/pokemon';
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);
  
  return (
    <Layout title='Favorites Pokemons'>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritesPokemons pokemons={ favoritePokemons } />
      }
    </Layout>
  );
};

export default FavoritesPage;
