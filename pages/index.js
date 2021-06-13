import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
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
      <h1 style={{gridColumn: "5 / span 6", textAlign: "center"}}>Pacific Oceans</h1>
      <h1 style={{gridColumn: "4 / span 8", textAlign: "center"}}>Comming Soon</h1>
    </Layout>
  )
}
