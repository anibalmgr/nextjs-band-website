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
      <div className="px-32 py-36">
      <article className="">
        <Subtitle>{postData.title}</Subtitle>
        <div className="">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
