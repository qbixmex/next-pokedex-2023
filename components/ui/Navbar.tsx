import NextLink from 'next/link';
import { Spacer, useTheme, Text, Link } from '@nextui-org/react';
import Image from 'next/image';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      className={ styles.navbar }
      style={{ backgroundColor: theme?.colors.gray100.value }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="App Icon"
        width={ 40 }
        height={ 40 }
      />

      <NextLink href="/" passHref>
        <Link>          
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites" passHref>
        <Link>          
          <Text color='orange'>Favorites</Text>
        </Link>
      </NextLink>
    </nav>
  );
};
