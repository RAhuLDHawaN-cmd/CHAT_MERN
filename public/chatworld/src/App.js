import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/login";
import SetAvatar from './Components/SetAvatar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<Register/>} />
<Route path='/register' element={<Register/>} />
<Route path='/chat' element={<Chat/>} />
<Route path='/login' element={<Login/>} />
<Route path='/setavatar' element={<SetAvatar/>} />

  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
