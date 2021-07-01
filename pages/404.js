import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Preweb from '../components/preweb';
import style from '../styles/utils.module.css';

export default function Custom404() {

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
      <Preweb/>
      {/* // <div className="innerContainer">
        //   <h1 className={style.s404}> Error 404 <br /> Page Not Found</h1>
      // </div> */}
    </Layout>
    )
}
