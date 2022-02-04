import Link from "next/link";
import Layout from "../../components/layout";

export default function Artists({ data }) {

  const artists = data.map(i => (
    i.artist &&
    <Link 
      href={`/artists/${i.artist}`}
      key={i.artist} >
        <a className="artist-link">
        {i.artist}
        </a>
    </Link>
  ))

  return (
    <Layout>
      <h1>
        Artists
      </h1>
      <p>
        Here is a complete list of artists.
      </p>
      <div className="artists-list">
        {artists}
      </div>
    </Layout>
  )
}



export async function getStaticProps() {
  const res = await fetch('https://raw.githubusercontent.com/wcollings/clc.github.io/utf8/record.json')
  const json = await res.json()

  return {
    props: {
      data: json
    },
  }
} 