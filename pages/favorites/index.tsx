import { useState, useEffect } from 'react';
import { Grid, Card } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, [])
  
  return (
    <Layout title='Favorites Pokemons'>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : (
            <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
              { favoritePokemons.map(id => (
                <Grid key={id} xs={ 6 } md={ 2 } xl={ 1 }>
                  <Card isHoverable isPressable css={{ padding: 10 }} variant="bordered">
                    <Card.Image
                      src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
                      alt='Pokemon'
                      width="100%"                      
                      height={ 150 }
                    />
                  </Card>
                </Grid>
              ))}
            </Grid.Container>
          )
      }
    </Layout>
  );
};

export default FavoritesPage;
