import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import data from '../../data/record.json'

export default function Artist({ artistData }) {
  const router = useRouter()
  const { artist } = router.query
  
  return (
    <Layout>
      <h1>
        {artist}
      </h1>

      {artistData !== undefined && artistData && artistData[0].members 
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
          <div>{artistData[0].albums.map(i => (
            <div key={i[1]} className="flex flex-row">
              <p>{i[0]}</p>
              <p className='ml-2'>{i[1]}</p>
            </div>
          ))} </div>
        </div>}

      
    </Layout>
  )
}

export async function getStaticProps({ params }) {

  const artistData = data.filter(i => i.artist === params.artist)

  return {
    props: {
      artistData
    }
  }
}

export async function getStaticPaths() {

  const paths = data.map((i) => ({ 
    params: { "artist": `${i.artist}` },
  }))
  
  return { 
    paths, 
    fallback: true };
}