import Head from 'next/head'

import Main from '../components/Main'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Paulo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap" rel="stylesheet"/>
      </Head>

      <Main />
      <About />
    </div>
  )
}
