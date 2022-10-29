import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdmPanel from './components/AdmPanel/AdmPanel';
import EventLogger from './components/EventLogger/EventLogger';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {

  return (
    <section className="App">
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/admpanel" element={<AdmPanel />}/>
          <Route path="/eventlogger" element={<EventLogger />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </section>
  )
}

export default App
