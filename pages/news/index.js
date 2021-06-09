import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/news';
import Link from 'next/link';
import Date from '../../components/date';


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

  <ul className={utilStyles.list}>
    {allPostsData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
        <Link href={`/news/${id}`}>
          <a>{title}</a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
    ))}
  </ul>
</Layout>
)
}