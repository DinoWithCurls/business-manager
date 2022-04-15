import React, {useState} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import SignIn from './pages/signIn'

function App() {
  const [token, setToken] = useState();
  if(!token){
    return <SignIn setToken={setToken}/>
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setToken={setToken} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;