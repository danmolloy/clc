import { useRouter } from 'next/router'
import Layout from '../../components/layout'

export default function Artist() {
  const router = useRouter()
  const { artist } = router.query
  
  return (
    <Layout>
      <h1>
        {artist}
      </h1>
    </Layout>
  )
}

