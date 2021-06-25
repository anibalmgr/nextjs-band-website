import Link from 'next/link';
import Layout from '../components/layout';
import style from '../styles/utils.module.css';

export default function Custom404() {

  return (
    <Layout>
      <div className="innerContainer">
        <h1 className={style.s404}> Error 404 <br /> Page Not Found</h1>
      </div>
    </Layout>
    )
}
