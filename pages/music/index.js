import Layout, { siteTitle } from '../../components/layout';
import styles from './music.module.css';

export default function About() {
  return (
    <Layout>
      <div className="innerContainer">
        <h1 className={styles.title}>Music</h1>
        <div className={styles.musicBox}>
          <img className={styles.musicImg} src="./images/single-cover-1.jpg" alt="Cover of The State of Things" />
          <div className={styles.musicInfo}>
            <p>Pacific Oceans</p>
            <h3>The State of Things</h3>
            
          </div>
        </div>
      </div>
      </Layout>
  )
}
