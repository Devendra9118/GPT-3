import './App.css'
import { Navbar, Article, Brand, CTA, Feature } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './container';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
