import { FC } from 'react';
import { Button } from '@nextui-org/react';
import Head from 'next/head';

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Pokedex App</title>
      </Head>
      <main>
        <h1 className="title gray-dark">Pokedex App</h1>
        <Button color="gradient">Button</Button>
      </main>
    </>
  );
};

export default HomePage;
