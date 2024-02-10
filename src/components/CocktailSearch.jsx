import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { CocktailList } from "./CocktailList";
import React from 'react';

export const CocktailSearch = () => {
  const [cocktails, setCocktails] = useState({})

  return (
    <>
      <h1>Search for a cocktail recipe by name</h1>
      <SearchInput setResults={ setCocktails } url={'http://localhost:3000/api/search'}/>
      <CocktailList cocktails={ cocktails } />
    </>
  )
}

export default CocktailSearch;
