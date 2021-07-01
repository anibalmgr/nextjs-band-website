import Link from 'next/link';
import style from './preweb.module.css';
import Button from './button';

export default function preweb() {
  return (
    <div className="innerContainer">
      <div className={style.preweb}>
        <img className={style.imgCover + " img"} src={"./images/single-cover-1.jpg"} alt="profile" />
        <Button text="Listen on Spotify" link="https://open.spotify.com/album/5dLMvtLUnTMgcIXkW6UoWT"/>
        <Button text="Listen on Apple Music" link="https://music.apple.com/us/album/the-state-of-things-single/1572364582"/>
        <Link href="/release">
          <p className={style.link + " pointer"}>Check out the press release</p>
        </Link>
      </div>
      <div className={style.preMenu}>
        <a mailto="hello@pacificoceans.uk">Contact us</a>
        <a className={style.menuItem2} href="https://www.instagram.com/inthepacificoceans/" target="_blank">Instagram</a>
      </div>
    </div>
  )
}
