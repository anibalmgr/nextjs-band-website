import { FaSpotify, FaYoutube, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import styles from './social.module.css';

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
      <Link href="https://www.spotify.com/uk/">
        <FaSpotify className={styles.icon}/>
      </Link>
      <Link href="https://www.spotify.com/uk/">
        <FaYoutube className={styles.icon}/>
      </Link>
      <Link href="https://www.spotify.com/uk/">
        <FaInstagram className={styles.icon}/>
      </Link>
      <Link href="https://www.spotify.com/uk/">
        <FaFacebookSquare className={styles.icon} />
      </Link>
      <Link href="https://www.spotify.com/uk/">
        <FaTwitter className={styles.icon}/>
      </Link>
    </div>
  )
}
