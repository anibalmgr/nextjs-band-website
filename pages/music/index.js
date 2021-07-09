
// Components
import Layout, { siteTitle } from '../../components/layout';
import Button from '../../components/button';

// Styles
import styles from './music.module.css';


export default function About() {
  return (
    <Layout>
      <div className="innerContainer">
        <h1 className={styles.title}>Music</h1>
        <div className={styles.musicBox}>
          <img className={styles.musicImg} src="./images/single-cover-1.jpg" alt="Cover of The State of Things" />
          <div className={styles.musicInfo}>
            <h3>Pacific Oceans</h3>
            <h2>The State of Things</h2>
            <Button link="" text="" />
            <Button link="" text="" />
            <Button link="" text="" />
          </div>
        </div>
      </div>
      </Layout>
  )
}
