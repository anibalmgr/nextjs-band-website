import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';


export default function FirstPost() {

  const [luli, setLuli] = useState(false);

  function changeluli(){
    setLuli(!luli);
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      {luli ? <p>El sulili</p> : <p> El Peli</p>}
      <button onClick={changeluli}>Change</button>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
