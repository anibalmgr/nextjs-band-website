import Link from 'next/link';
import styles from './menu.module.css'


export default function Menu() {
  return (
    <div>
      <Link href="/music">
        <a className={styles.menuItem1}>MUSIC</a>
      </Link>
      <Link href="/news">
        <a className={styles.menuItem2}>NEWS</a>
      </Link>
      <Link href="/contact">
        <a className={styles.menuItem3}>CONTACT</a>
      </Link>
      <Link href="/about">
        <a className={styles.menuItem4}>ABOUT US</a>
      </Link>
    </div>
  )
}
