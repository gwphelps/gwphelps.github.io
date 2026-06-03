import { useState } from 'react'
import Game from './components/Game'
import Blog from './components/Blog';
import ButtonAppBar from "./components/ButtonAppBar";
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';

function App() {
  const pages = [
    {name: "Home", path: "/"},
    {name: "AnimeToAnime", path: "/animetoanime"},
    {name: "Blog", path: "/blog"}
  ]; 
  const theme = createTheme({
    typography: {
      // Scale down all headers by setting a smaller base or relative size
      h1: { fontSize: '2.5rem' },
      h2: { fontSize: '2rem' },
      h3: { fontSize: '1.75rem' },
      h4: { fontSize: '1.5rem' },
      h5: { fontSize: '1.25rem' },
      h6: { fontSize: '1rem' },
      body1: { fontSize: '1.12rem' },
      // Optionally change htmlFontSize for a global percentage reduction
      // htmlFontSize: 14, 
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ButtonAppBar title="chet1620" pages={pages}/>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home pages={pages}/>} />
          <Route path="/animetoanime" element={<Game/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:fileName" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      
    </>
  )
}

export default App
