import React from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Login from "./pages/login";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
  <Routes>

<Route path='/register' element={<Register/>} />
<Route path='/chat' element={<Chat/>} />
<Route path='/login' element={<Login/>} />

  </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
