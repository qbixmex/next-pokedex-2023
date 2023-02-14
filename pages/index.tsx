import { FC } from 'react';
import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';

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
  console.log('Message from getStaticProps function :)');

  return {
    props: {
      name: "Pikachu"
    },
  };
};

export {
  getStaticProps,
  HomePage as default
};
