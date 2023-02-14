import { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = (props) => {
  const { children, title = 'Pokedex' } = props;

  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="author" content="Daniel González" />
        <meta name="description" content={`${title} information`} />
        <meta name="keyword" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* TODO: <Navbar /> */}

      <main>{ children }</main>
    </>
  );
};
