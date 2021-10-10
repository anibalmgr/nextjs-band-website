import { FaSpotify, FaYoutube, FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function SocialMedia(props) {

  const iconStyle = "h-full w-6"

  return (
    <div className="flex gap-x-5 py-2">
      <Link href="https://www.instagram.com/inthepacificoceans/">
        <FaInstagram className={iconStyle}/>
      </Link>
      <Link href="/">
        <FaSpotify className={iconStyle} />
      </Link>
      <Link href="https://www.youtube.com/channel/UCmdo5AheBHZjeNuE9IdoL2A">
        <FaYoutube className={iconStyle}/>
      </Link>
      <Link href="/">
        <FaFacebookSquare className={iconStyle} />
      </Link>
      <Link href="https://twitter.com/PacificOceanos">
        <FaTwitter className={iconStyle}/>
      </Link>
    </div>
  )
}
