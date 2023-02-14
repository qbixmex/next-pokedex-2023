import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts/Layout';

type Props = { pokemon: any };

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  return (
    <Layout title='Pokemon # Page'>
      <h1>Pokemon # { router.query.id }</h1>
    </Layout>
  );
};



export default PokemonPage;
