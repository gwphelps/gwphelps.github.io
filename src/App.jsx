import { useState } from 'react'
import Game from './components/Game'
import Blog from './components/Blog';
import ButtonAppBar from "./components/ButtonAppBar";
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <ButtonAppBar title="AnimeToAnime"/>
              <Game />
            </>
            } />
          <Route path="/animetoanime" element={
            <>
              <ButtonAppBar title="AnimeToAnime"/>
              <Game />
            </>} />
          <Route path="/blog" element={
            <>
              <ButtonAppBar title="chet's Blog"/>
              <Blog />
            </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
