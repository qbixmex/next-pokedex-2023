import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';

const HomePage: FC = (props) => {
  console.log(props);

  return (
    <Layout title='Pokemons List'>
      <main>
        <ul>
          <li>Pokemon</li>
        </ul>
      </main>
    </Layout>
  );
};

const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results
    },
  };
};

export {
  getStaticProps,
  HomePage as default
};
