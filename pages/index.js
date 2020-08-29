import Head from "next/head";
import "../styles/Home.scss";

// components
import SearchBar from "../src/Components/Searchbar";
import Sugestions from "../src/Components/Sugestions";
import Suscriptions from "../src/Components/Suscriptions";
import Header from "../src/Components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ribit</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main">
        <Header />

        <SearchBar />
        <Sugestions />
        <Suscriptions />
      </main>

      {/* <footer className="footer">
       {/* create a footer for ribit */}
      {/* </footer> */}
    </div>
  );
}
