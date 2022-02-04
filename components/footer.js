import Link from 'next/link'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="footer">
      <Link href="https://facebook.com">
        <a target="_blank">
          <BsFacebook className='footer-links'/>
        </a>
      </Link>
      <Link href="https://instagram.com">
        <a target="_blank">
          <BsTwitter className='footer-links'/>
        </a>
      </Link>
    </div>
  )
}