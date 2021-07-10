import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Treegram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      <main>
        {/* sidebar */}
        {/* feeds */}
        {/* widgets */}
      </main>
    </div>
  )
}
