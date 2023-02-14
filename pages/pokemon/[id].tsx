import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts/Layout';
import { Pokemon } from '../../interfaces';
// import { pokeApi } from '../../api';

type Props = { pokemon: Pokemon };

const PokemonPage: NextPage<Props> = ({ pokemon: { id, name } }) => {
  const router = useRouter();

  return (
    <Layout title='Pokemon # Page'>
      <p>Pokemon # { `${id} ${name}` }</p>
    </Layout>
  );
};

const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false, // false or 'blocking'
  };
};

const getStaticProps: GetStaticProps = async (context) => {
  // const { data } = await pokeApi.get<Pokemon>('/pokemon?name=pikachu');

  return {
    props: {
      pokemon: {
        id: '1',
        name: 'Bulbasaur',
      },
    }
  };
};

export {
  getStaticPaths,
  getStaticProps,
  PokemonPage as default,
};
