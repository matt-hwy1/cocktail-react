import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CocktailSearch } from './components/CocktailSearch';
import { CocktailDetail } from "./components/CocktailDetail";
import PATHS from './constants/routing/Paths'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.COCKTAIL_SEARCH_PATH} element={<CocktailSearch />} />
          <Route path={PATHS.COCKTAIL_DETAIL_PATH} element={<CocktailDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
