import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { CocktailList } from "./CocktailList";
import React from 'react';
import URLS from '../constants/routing/Urls'

export const CocktailSearch = () => {
  const [cocktails, setCocktails] = useState({})

  return (
    <>
      <h1>Search for a cocktail recipe by name</h1>
      <SearchInput setResults={ setCocktails }
                   url={URLS.COCKTAIL_SEARCH_API_URL}
                   count_url={URLS.COCKTAIL_COUNT_API_URL} />
      <CocktailList cocktails={ cocktails } />
    </>
  )
}

export default CocktailSearch;
