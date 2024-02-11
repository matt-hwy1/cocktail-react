import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CocktailSearch } from './components/CocktailSearch';
import { CocktailDetail } from "./components/CocktailDetail";
import PATHS from './constants/routing/Paths'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CocktailSearch />} />
        <Route path={PATHS.COCKTAIL_DETAIL_PATH} element={<CocktailDetail />} />
      </Routes>
    </div>
  )
}

export default App;
