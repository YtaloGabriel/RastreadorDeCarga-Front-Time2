import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Public from './components/Public/Public';
import Logger from './components/Logger/Logger';

import Dashboard from './components/Admin/Dashboard/Dashboard';
import Cargo from './components/Admin/Cargo/Cargo';

function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/public" element={<Public />}/>

          {/* Admin Page Routes */}
          <Route path="/admin" element={<Dashboard />}/>
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/cargo" element={<Cargo />}/>



          <Route path="/logger" element={<Logger />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
