import { Spacer, useTheme } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
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
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="App Icon"
        width={70}
        height={70}
      />
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>

      <Spacer css={{ flex: 1 }} />
      <Text color='white'>Favorites</Text>
    </nav>
  );
};
