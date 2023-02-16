import { useEffect } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { Layout } from '../../components/layouts/Layout';
import { Pokemon, PokemonResult } from '../../interfaces';
import { pokeApi } from '../../api';
import { capitalize } from '../../utils';

type Props = { pokemon: PokemonResult };

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const onToggleFavorite = () => {
    console.log("ID:", pokemon.id);
    localStorage.setItem('favorites', `${pokemon.id}`);
  };

  //! This will throw server error 500
  //! Because window object does not exist on nodejs
  //! so localStorage does not exist on node
  // console.log(localStorage.getItem('favorites'));

  useEffect(() => {
    console.log("ID:", 'Secondary Effect', localStorage.getItem('favorites'));
  }, []);

  return (
    <Layout title={`${ capitalize(pokemon.name) } Pokemon`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.image ?? '/no-image.png' }
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>

              <Button
                color="gradient"
                ghost
                onPress={ onToggleFavorite }
              >Save in Favorites</Button>

            </Card.Header>
            <Card.Body>
              <Text size={ 30 }>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image
                  src={ pokemon.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image
                  src={ pokemon.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map(id => ({ params: { id } })),
    fallback: false, // false or 'blocking'
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

  return {
    props: {
      pokemon: {
        id: data.id,
        name: data.name,
        image: data.sprites.other?.dream_world.front_default ?? '/no-image.png',
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
        front_shiny: data.sprites.front_shiny,
        back_shiny: data.sprites.back_shiny,
      },
    }
  };
};

export {
  getStaticPaths,
  getStaticProps,
  PokemonPage as default,
};
