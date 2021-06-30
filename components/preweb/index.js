import Link from 'next/link';
import style from './preweb.module.css';
import Button from './button';

export default function preweb() {
  return (
    <div className="innerContainer">
      <div className={style.preweb}>
        <img className={style.imgCover + " img"} src={"./images/single-cover-1.jpg"} alt="profile" />
        <Button text="Listen on Spotify" link="https://open.spotify.com/track/5iYAgwC9Q9ctuegJifzZc0?si=e2627ea586364903"/>
        <Button text="Listen on Spotify" link="spotify:track:5iYAgwC9Q9ctuegJifzZc0" />
        <Button text="Listen on Spotify" />
        <Link href="/release">
          <p>Download the press release</p>

        </Link>
      </div>
      <div className={style.preMenu}>
        <a mailto="hello@pacificoceans.uk">Contact us</a>
        <a className={style.menuItem2} href="https://www.instagram.com/inthepacificoceans/" target="_blank">Instagram</a>
      </div>
    </div>
  )
}
