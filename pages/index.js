import Link from 'next/link'
import Layout from '../components/layout'
import { menuItems } from '../components/menu'

export default function Home() {

  return (
    <Layout>
      <h1 className='main-h1'>
        Welcome to Celtic Lyrics Corner.
      </h1>
      <p>We have one of the largest free collections of celtic song lyrics on the web.</p>
      <p>Search our database or browse our catalogue.</p>
      <div className='browse-search'>
        <div className='search-bar'>
          <label htmlFor='search-input'>Search Database</label>
          <input className='search-input'/>
          <button className='search-button'>Search</button>
        </div>
        <div className='browse-bar'>
          <p className='browse-button'>Browse by...</p>
          {menuItems.map(i => ( i.name !== 'Home' &&
            <Link href={i.link} key={i.link}>
              <a className='browse-link'>{i.name}</a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

