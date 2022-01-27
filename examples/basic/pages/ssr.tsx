import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../lib/session';

import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

export default function SsrProfile({
  user
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <nav>
        <Link href='/sg'>SG</Link> | <Link href='/api/logout'>Logout</Link>
      </nav>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </>
  );
}
export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res
}) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader('location', '/api/login');
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: { isLoggedIn: false }
      }
    };
  }

  return {
    props: { user: req.session.user }
  };
},
sessionOptions);
