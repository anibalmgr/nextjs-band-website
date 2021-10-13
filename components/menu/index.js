import { Subtitle } from '../fonts';

export default function Menu({home}) {
  
  return (
    <div>
        <Subtitle href="/music" className="fixed top-3 left-3 md:top-8 md:left-8">MUSIC</Subtitle>
        <Subtitle href="/news" className="fixed top-3 right-3 md:top-8 md:right-8 vertical-rl">NEWS</Subtitle>
        <Subtitle href="/contact" className="fixed bottom-3 right-3 md:bottom-8 md:right-8">CONTACT</Subtitle>
        <Subtitle href="/about" className="fixed bottom-3 left-3 md:bottom-8 md:left-8 vertical-lr rotate-180">ABOUT US</Subtitle>
      {!home && (<Subtitle logo href="/" className="fixed top-2 md:top-7 left-1/2 transform -translate-x-1/2">PACIFIC OCEANS</Subtitle>)}
    </div>
  )
}
