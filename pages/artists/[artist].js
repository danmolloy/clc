import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Artist({ artistData }) {
  const router = useRouter()
  const { artist } = router.query
  
  return (
    <Layout>
      <h1>
        {artist}
      </h1>
      
      {artistData && artistData[0].members 
      && 
      <div>
        <h2>Members</h2>
        <div>
        <p>
          {artistData[0].members}
        </p>
        </div>
      </div>
      }

      {artistData && artistData[0].albums 
      &&
        <div>
          <h2>Albums</h2>
        </div>}

      {artistData && JSON.stringify(Object.keys(artistData[0]))}
      
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://raw.githubusercontent.com/wcollings/clc.github.io/utf8/record.json')
  const allData = await res.json()
  const artistData = allData && allData.filter(i => i.artist === 'Altan')

  return {
    props: {
      artistData
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://raw.githubusercontent.com/wcollings/clc.github.io/utf8/record.json')
  const data = await res.json()
  const params = JSON.stringify(data.map(i => (i.artist)))

  return {
    paths: [
      { params: {
        artist: params
      } }
    ],
    fallback: true // false or 'blocking'
  };
}