import { Container, Text, Image } from "@nextui-org/react";
import styles from './NoFavorites.module.css';

export const NoFavorites = () => {
  return (
    <Container className={ styles.container }>
      <Text h1 className={ styles.heading }>
        There&apos;s no pokemons on favorites yet!
      </Text>

      <Image
        className={ styles.img }
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        width={ 250 }
        height={ 250 }
        alt="Pikachu Pokemon"
      />
    </Container>
  );
};
