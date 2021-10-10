import Head from 'next/head';

import VideoBK from './videoBK';
import Menu from './menu';

const name = 'Pacific Oceans'
export const siteTitle = 'Pacific Oceans'

export default function Layout({ children, home, preweb }) {

  return (
    <div>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Website of the british band Pacific Oceans"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <VideoBK />
      {!preweb && <Menu home={home}/>}
      <div className="overflow-hidden w-screen">
        {children}
      </div>

    </div>
  )
}
