import { FaSpotify, FaYoutube, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import styles from './social.module.css';

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
      <Link href="https://www.instagram.com/inthepacificoceans/">
        <FaInstagram className={styles.icon}/>
      </Link>
      <Link href="/">
        <FaSpotify className={styles.icon}/>
      </Link>
      <Link href="https://www.youtube.com/channel/UCmdo5AheBHZjeNuE9IdoL2A">
        <FaYoutube className={styles.icon}/>
      </Link>
      <Link href="/">
        <FaFacebookSquare className={styles.icon} />
      </Link>
      <Link href="https://twitter.com/PacificOceanos">
        <FaTwitter className={styles.icon}/>
      </Link>
    </div>
  )
}
