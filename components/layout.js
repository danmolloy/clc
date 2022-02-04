import Head from "next/head";
import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="layout">
      <Head>
        <title>Celtic Lyrics Corner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showMenu={() => setShowMenu(!showMenu)}/>
      {showMenu && <Menu showMenu={() => setShowMenu(false)}/>}
      <div className="main">
        {children}
      </div>
      <Footer />
    </div>
  )
}