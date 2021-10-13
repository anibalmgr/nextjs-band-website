import Layout, { siteTitle } from '../../components/layout';
import { Title, Paragraph } from '../../components/fonts';
import Image from 'next/image';

export default function About() {

  const description = "Pacific Oceans came to life in 2020 as an unexpected result of a karaoke night. While singing Dreams by Fleetwood Mac, everything started taking form.After that, it felt natural to start talking about forming a band, and in a few weeks Pacific Oceans was born. Coming from California with Jamaican heritage, Mikella has always had a strong connection to music. Depending on the words and sounds to give her a sense of understanding behind her emotions, music has had a consistent influence on who she is and how she sees the world. Anibal is a music producer and piano player, he has been making music from a young age, first just imitating his father's punk band and improvising on the piano, and later playing different instruments in a variety of bands. In his words, 'Discovering the simplicity and emotional power of pop and dance music gave me a lot of freedom, and now I want to make the music that I enjoy and that I feel genuine doing.' ‘The State of Things’ marks their first step into the British music scene since they began recording and producing music in late 2020."
  return (
    <Layout>
      <div className="w-full -h-full p-20 flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center gap-y-8">
        <div className="text-center">
          <Title>About Us</Title>
        </div>
        <div className="max-w-[340px] overflow-hidden content-center">
          <img className="rounded-sm border border-black object-cover" src={"./images/landing.jpg"} alt="profile" />
        </div>
        <Paragraph>Pacific Oceans came to life in 2020 as an unexpected result of a karaoke night. While singing Dreams by Fleetwood Mac, everything started taking form.After that, it felt natural to start talking about forming a band, and in a few weeks Pacific Oceans was born.
            <br className="mt-2"/> Coming from California with Jamaican heritage, Mikella has always had a strong connection to music. Depending on the words and sounds to give her a sense of understanding behind her emotions, music has had a consistent influence on who she is and how she sees the world.
            <br className="mt-2"/>Anibal is a music producer and piano player, he has been making music from a young age, first just imitating his father's punk band and improvising on the piano, and later playing different instruments in a variety of bands. In his words, 'Discovering the simplicity and emotional power of pop and dance music gave me a lot of freedom, and now I want to make the music that I enjoy and that I feel genuine doing.'
            <br className="mt-2"/>  ‘The State of Things’ marks their first step into the British music scene since they began recording and producing music in late 2020.
        </Paragraph>
      </div>
      </div>
    </Layout>
  )
}
