import './App.css'
import HomePage from './pages/HomePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import CreatePage from './pages/CreatePage.jsx'

import { useState } from 'react'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'


function App() {
  
  return (
   <div data-theme="black">
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/note/:id' element={<NoteDetailPage />}></Route>
      <Route path='/create' element={<CreatePage />}></Route> 
    </Routes>
   </div>
  )
} 

export default App
