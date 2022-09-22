import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import './Layout.css';

function Layout({ children }) {
  return (
    <main className='App'>
        <Header />
        <div className="content">{children}</div>
        <Footer />
    </main>
  )
}

export default Layout