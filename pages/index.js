import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Landing from '../components/landing';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/news';
import Link from 'next/link';
import Date from '../components/date';

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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Landing />
    </Layout>
  )
}
