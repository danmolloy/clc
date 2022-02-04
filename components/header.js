import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header(props) {
  return (
    <div className='header'>
      <Link href="/">
        <a className='header-link'>
        Celtic Lyrics Corner
        </a>
      </Link>
      <AiOutlineMenu className='menu-icon' onClick={() => props.showMenu()}/>
    </div>
  )
}