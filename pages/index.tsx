import { GetStaticProps, NextPage } from 'next';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { capitalize } from '../utils';

type Props = { pokemons: SmallPokemon[] };

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemons List'>
      <main>
        <Grid.Container gap={ 2 } justify="flex-start">
          { pokemons.map(({id, name, img}) => (
            <Grid xs={ 6 } sm={ 4 } md={ 2 } xl={ 1 } key={ id }>
              <Card isHoverable variant="bordered" isPressable>
                <Card.Body>
                  <Card.Image src={ img } width={ 150 } height={ 150 } alt={ name } />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ name }</Text>
                    <Text># { id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </main>
    </Layout>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    },
  };
};

export {
  getStaticProps,
  HomePage as default
};
