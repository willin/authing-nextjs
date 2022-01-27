import { isAuthenticated } from '@authing/nextjs';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Next.js</h1>
      <nav>
        <Link href='/api/login'>Login</Link> |{' '}
        <Link href='/api/logout'>Logout</Link>
      </nav>
    </div>
  );
};

export default Home;
