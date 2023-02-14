import {
  NextApiRequest as Request,
  NextApiResponse as Response,
} from 'next';

type Data = {
  ok: boolean;
  name: string;
  city: string;
  age: number;
};

const handler = (_request: Request, response: Response<Data>) => {
  response.status(200).json({
    ok: true,
    name: 'John Doe',
    city: 'New York',
    age: 54,
  });
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction