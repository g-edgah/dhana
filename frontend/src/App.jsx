import './App.css'
import HomePage from './pages/HomePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import CreatePage from './pages/CreatePage.jsx'

import { useState } from 'react'
import { Routes, Route } from 'react-router'
import toast from 'react-hot-toast'


function App() {
  
  return (
   <div className="relative h-full w-full">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/note/:id' element={<NoteDetailPage />}></Route>
      <Route path='/create' element={<CreatePage />}></Route> 
    </Routes>
   </div>
  )
} 

export default App
