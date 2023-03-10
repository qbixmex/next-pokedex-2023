import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';

type Props = { data: SmallPokemon };

export const PokemonCard: NextPage<Props> = ({ data: { id, name, img } }) => {
  const router = useRouter();

  const handlePress = () => router.push(`/name/${ name }`);

  return (
    <Card
      isHoverable
      isPressable
      onPress={ handlePress }
      variant="bordered"
    >
      <Card.Body>
        <Card.Image src={ img } width={ 150 } height={ 150 } alt={ name } />
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{ name }</Text>
          <Text># { id }</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};