import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Texts from './components/Texts/Texts'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='bg-emerald-100 min-h-screen'>
      <Header />

      <Content />

      <Texts />

      <Footer />
    </div>
  )
}

export default App
