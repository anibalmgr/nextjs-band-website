import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/news';
import Head from 'next/head';
import Date from '../../components/date';
import { Subtitle } from '../../components/fonts';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="w-full h-full flex justify-center">
      <div className="px-32 py-36 max-w-[1200px]">
      <article className="">
        <div className="pb-4 pr-4 text-right">
          <Date dateString={postData.date} />
        </div>
        <div className="text-center pb-8">
           <Subtitle>{postData.title}</Subtitle>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
