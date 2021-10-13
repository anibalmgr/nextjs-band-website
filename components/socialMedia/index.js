import { FaSpotify, FaYoutube, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialMedia(props) {

  const iconStyle = "h-full w-6"

  return (
    <div className="flex gap-x-5 py-2">
      <Link href="https://www.instagram.com/inthepacificoceans/">
        <FaInstagram className={iconStyle}/>
      </Link>
      <Link href="https://open.spotify.com/artist/0EQKi7Dqf5biZ3RaVGbZpt?si=ksYgDL7VSo-4nbx0VMkBkQ&dl_branch=1">
        <FaSpotify className={iconStyle} />
      </Link>
      <Link href="https://www.youtube.com/channel/UCmdo5AheBHZjeNuE9IdoL2A">
        <FaYoutube className={iconStyle}/>
      </Link>
      <Link href="https://www.facebook.com/Pacific-Oceans-107566414921715/">
        <FaFacebookSquare className={iconStyle} />
      </Link>
      <Link href="https://twitter.com/PacificOceanos">
        <FaTwitter className={iconStyle}/>
      </Link>
    </div>
  )
}
