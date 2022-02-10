import Link from 'next/link'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

export default function Header(props) {
  return (
    <div className='header'>
      <Link href="/">
        <a className='header-link'>
        Celtic Lyrics Corner
        </a>
      </Link>
      <div className='flex flex-row'>
        <AiOutlineSearch className='menu-icon'/>
        <AiOutlineMenu className='menu-icon' onClick={() => props.showMenu()}/>
      </div>
    </div>
  )
}