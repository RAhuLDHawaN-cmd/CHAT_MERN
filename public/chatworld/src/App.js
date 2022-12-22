import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Chat from "./Components/Chat";
import Login from "./pages/login";
import SetAvatar from './Components/SetAvatar';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<Chat/>} />
<Route path='/register' element={<Register/>} />
<Route path='/chat' element={<Chat/>} />
<Route path='/login' element={<Login/>} />
<Route path='/setavatar' element={<SetAvatar/>} />
<Route path='/chat' element={<Chat/>} />
  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
