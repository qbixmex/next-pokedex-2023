import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '../../components/layouts/Layout';
import { Pokemon } from '../../interfaces';
import { pokeApi } from '../../api';
import { capitalize } from '../../utils';

type Props = { pokemon: Pokemon };

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Layout title={`${ capitalize(pokemon.name) } Pokemon`}>
      <h1>{ capitalize(pokemon.name) }</h1>
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
      pokemon: data,
    }
  };
};

export {
  getStaticPaths,
  getStaticProps,
  PokemonPage as default,
};
