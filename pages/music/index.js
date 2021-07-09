import { useMediaQuery } from 'react-responsive';

// Components
import Layout, { siteTitle } from '../../components/layout';
import Button from '../../components/button';

// Styles
import styles from './music.module.css';


export default function About() {

  const isMobile = useMediaQuery({query: '(max-width: 500px)'})

  return (
    <Layout>
      <div className="innerContainer">
        <h1 className={styles.title}>Music</h1>
        <div className={styles.musicBox}>
          <img className={styles.musicImg} src="./images/single-cover-1.jpg" alt="Cover of The State of Things" />
          <div className={styles.musicInfo}>
            <h3>Pacific Oceans</h3>
            <h2>The State of Things</h2>
            <Button link={isMobile ? "spotify:track:7Igl0UrESGJcG5b3uumaD7" : "https://open.spotify.com/track/7Igl0UrESGJcG5b3uumaD7?si=6e6b7802652e403a"} text="Listen on Spotify" />
            <Button link="https://music.apple.com/us/album/the-state-of-things-single/1572364582?uo=4&app=music&at=1001lry3&ct=dashboard" text="Listen on Apple Music" />
            <Button link="" text="" />
          </div>
        </div>
      </div>
      </Layout>
  )
}
