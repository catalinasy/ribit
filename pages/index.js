import Head from 'next/head'
import '../styles/Home.scss'
import SearchBar from '../src/Components/Searchbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ribit</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main">
        <h6 className="title">
          Bienvenidx usuario!
        </h6>
        <SearchBar/>
    {/* sugestions */}
    {/* current suscriptions */}
      </main>

      <footer className="footer">
       {/* create a footer for ribit */}
      </footer>
    </div>
  )
}
