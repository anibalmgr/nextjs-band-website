import Link from 'next/link';
import styles from './menu.module.css'


export default function Menu({home}) {
  
  return (
    <div className={styles.menu}>
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
      {!home && (<Link href="/">
              <a className={styles.menuItem0}>PACIFIC OCEANS</a>
            </Link>)}
    </div>
  )
}
