import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login';
import RecSenha from './pages/RecuperarSenha'
import Catalogo from './pages/Catalogo';
import Profile from './pages/ProfilePage';
import Carrinho from './pages/Carrinho';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LucideQrCode } from 'lucide-react';


function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/recuperar-senha" element={<RecSenha />} />
      </Routes>

      <Routes>
        <Route path='/catalogo' element={<Catalogo/>}></Route>
      </Routes>
    

    <Routes>
        <Route path='/perfil' element={<Profile/>}></Route>
      </Routes>


      <Routes>
        <Route path='/carrinho' element={<Carrinho/>}></Route>
      </Routes>
    </Router>
  )
}

export default App