import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'

export default function Menu(props) {
  return (
    <div className="menu">
      <div className='menu-header'>
        <AiOutlineClose className='close-menu-icon ' onClick={() => props.showMenu()}/>
      </div>
      <div className='menu-items'>
        {menuItems.map(i => (
          <Link href={i.link} key={i.link}>
            <a className='menu-link'>
              {i.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const menuItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Artists & Groups",
    link: "/artists/allArtists"
  },
  {
    name: "Compilations",
    link: "/compilations"
  },
  {
    name: "Shows",
    link: "/shows"
  },
  {
    name: "Puirt a Beul",
    link: "/puirtaBeul"
  },
  {
    name: "All Songs",
    link: "/allSongs"
  }
]