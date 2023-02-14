import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import Image from 'next/image';
import { capitalize } from '../utils';

type Props = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemons List'>
      <main>
          { pokemons.map(({id, name, img}) => (
            <div key={id}>
              <p># {id} - { capitalize(name) }</p>
              <Image src={img} alt={name} width={50} height={50} />
            </div>
          ))}
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
