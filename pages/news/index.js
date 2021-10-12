import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/news';
import Link from 'next/link';
import Date from '../../components/date';
import { Title } from '../../components/fonts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function News({ allPostsData }) {
  return (
<Layout>
  <div className="h-screen w-full grid grid-cols-12 grid-rows-6">
    <div className="col-span-12 row-span-2 text-center flex items-end">
      <Title>NEWS</Title>
    </div>
    <ul className="col-start-3 col-span-8 flex flex-col gap-8">
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <small>
            <Date dateString={date} />
          </small>
          <br />
          <Link href={`/news/${id}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</Layout>
)
}
