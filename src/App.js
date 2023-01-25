import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Color from './components/Color/Color';
import NotFound from './components/NotFound/NotFound.jsx';

export default function App() {
  return (
    <main className="App">
      <Layout />
      <Routes>
        <Route path="/color/:id/:key/:pass" element={ <Color /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </main>
  );
}
