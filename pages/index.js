import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Landing from '../components/landing';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/news';
import Link from 'next/link';
import Date from '../components/date';

import Preweb from '../components/preweb';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout preweb>
      <Head>
        <title>{siteTitle}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta property="og:title" content="Pacific Oceans" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pacific Oceans" />
        <meta property="og:description" content="Pacific Oceans' website." />
        <meta property="og:url"  content="https://pacificoceans.co.uk/" />
        <meta property="og:image" content="https://pacificoceans.co.uk/images/single-cover-1.jpg" />
      </Head>
      <Landing />
    </Layout>
  )
}
