import { Subtitle } from '../fonts';

export default function Menu({home}) {
  
  return (
    <div>
        <Subtitle href="/music" className="fixed top-8 left-8">MUSIC</Subtitle>
        <Subtitle href="/news" className="fixed top-8 right-8 vertical-rl">NEWS</Subtitle>
        <Subtitle href="/contact" className="fixed bottom-8 right-8">CONTACT</Subtitle>
        <Subtitle href="/about" className="fixed bottom-8 left-8 vertical-lr rotate-180">ABOUT US</Subtitle>
      {!home && (<Subtitle href="/" className="fixed top-8 left-1/2 transform -translate-x-1/2">PACIFIC OCEANS</Subtitle>)}
    </div>
  )
}
