import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

type Props = { pokemonId: number };

export const FavoriteCardPokemon = ({ pokemonId }: Props) => {
  const router = useRouter();
  const onFavoriteClicked = () => router.push(`/pokemon/${ pokemonId }`);

  return (
    <Grid xs={ 6 } md={ 2 } xl={ 1 } onClick={ onFavoriteClicked }>
      <Card isHoverable isPressable css={{ padding: 10 }} variant="bordered">
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt="Pokemon"
          width="100%"
          height={150}          
        />
      </Card>
    </Grid>
  );
};
