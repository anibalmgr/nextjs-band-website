import Layout, { siteTitle } from '../../components/layout';
import Head from 'next/head';
import style from './release.module.css';
import Link from 'next/link';

export default function PressRelease() {
 return (
   <Layout preweb>
     <Head>
       <title>{siteTitle}</title>
     </Head>
     <div className={style.release}>
       <h3>'The State of Thing' is Out Now</h3>
       <p>Pacific Oceans' first single ‘The State of Things’ has been released today.
         Nu-Disco beats and intense layers of 80s-like synths make up this breakup song.
         A reflection of all the contradictory feelings before someone says, “It's better to stop!”.
         It is a captivating song to lose yourself to while dancing or to feel the freedom of the highway on a night drive.<br/><br />
         The song has influences from 80s electronica and contemporary artists like Jessie Ware or Roísín Murphy,
         but also from a wide variety of artists including genres like Soul, R&B, and Latin American Electro-Pop. <br /><br />

         Pacific Oceans came to life in 2020 as an unexpected result of a karaoke night. While singing Dreams by Fleetwood Mac,
         everything started taking form. After that,
         it felt natural to start talking about forming a band, and in a few weeks Pacific Oceans was born. <br /><br />

         Coming from California with Jamaican heritage, Mikella has always had a strong connection to music.
         Depending on the words and sounds to give her a sense of understanding behind her emotions,
         music has had a consistent influence on who she is and how she sees the world. <br /><br />

         Anibal is a music producer and piano player, he has been making music from a young age,
         first just imitating his father's punk band and improvising on the piano, and later playing different instruments in a variety of bands.
         In his words, “Discovering the simplicity and emotional power of pop and dance music gave me a lot of freedom,
         and now I want to make the music that I enjoy and that I feel genuine doing.” <br /><br />

         ‘The State of Things’ marks their first step into the British music scene since they began recording and producing music in late 2020. <br /><br />
       </p>

       <p className={style.black}>You can contact Pacific Oceans at <a mailto="hello@pacificoceans.uk">hello@pacificoceans.uk</a> for interviews, guest list, and further information. You can also find them on <a href="https://www.instagram.com/inthepacificoceans/">Instagram.</a></p>
       <div className={style.image}>
         <img src="./images/3.jpg" alt="Band image"></img>
         <p className={style.imgCredit}>Archie Graham</p>
       </div>
       <div className={style.image}>
         <img src="./images/4.jpg" alt="Band image"></img>
         <p className={style.imgCredit}>Archie Graham</p>
       </div>
       <div className={style.image}>
         <img src="./images/1.jpg" alt="Band image"></img>
         <p className={style.imgCredit}>Archie Graham</p>
       </div>
       <div className={style.image}>
         <img src="./images/2.jpg" alt="Band image"></img>
         <p className={style.imgCredit}>Archie Graham</p>
       </div>
       <div className={style.image}>
         <img src="./images/5.jpg" alt="Band image"></img>
         <p className={style.imgCredit}>Archie Graham</p>
       </div>
       <Link href="/">
         <p className={style.home}>Home</p>
       </Link>
     </div>
   </Layout>
 )
}
