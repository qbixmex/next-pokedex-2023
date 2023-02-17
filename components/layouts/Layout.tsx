import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import styles from './Layout.module.css';

interface Props extends PropsWithChildren {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = (props) => {
  const { children, title = 'Pokedex' } = props;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="author" content="Daniel González" />
        <meta name="description" content={`${title} information`} />
        <meta name="keyword" content={`${title}, pokemon, pokedex`} />
        <meta name="og:title" content={`${title} Information`} />
        <meta name="og:description" content={`This is the main page information of ${title}`} />
        <meta name="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main className={styles.container}>
        { children }
      </main>
    </>
  );
};
