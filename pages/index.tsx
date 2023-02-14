import { FC } from 'react';
import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

const HomePage: FC = () => {
  return (
    <Layout title='Pokemons List'>
      <main>
        <h1>Pokemon List</h1>
        <Button color="gradient">Button</Button>
      </main>
    </Layout>
  );
};

export default HomePage;
