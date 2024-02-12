import { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput";
import { CocktailList } from "./CocktailList";
import React from "react";
import URLS from "../constants/routing/Urls"
import { PAGE_SIZE } from "../constants/Pagination"

export const CocktailSearch = () => {
  const [query, setQuery] = useState("")
  const [cocktails, setCocktails] = useState({})
  const [page, setPage] = useState(0)
  const [currentCount, setCurrentCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  function getCocktails(queryValue, pageNumber) {
    fetch(`${URLS.COCKTAIL_SEARCH_API_URL}?query=${queryValue}&page=${pageNumber}&page_size=${PAGE_SIZE}`)
      .then((response) => response.json())
      .then((json) => {
        setCocktails(json["drinks"])
      });
  }

  function getTotalCount(queryValue) {
    fetch(`${URLS.COCKTAIL_COUNT_API_URL}?query=${queryValue}`)
      .then((response) => response.json())
      .then((json) => {
        setTotalCount(json["count"])
      });
  }

  useEffect(() => {
    setCurrentCount(((page - 1) * PAGE_SIZE) + cocktails.length)
  }, [cocktails]);

  useEffect(() => {
    setPage(1)
    getCocktails(query, 1)
    getTotalCount(query)
  }, [query]);


  useEffect(() => {
    getCocktails(query, page)
  }, [page]);

  function handlePrevious() {
    setPage(page - 1)
  }

  function handleNext() {
    setPage(page + 1)
  }

  return (
    <>
      <h1>Search for a cocktail recipe by name</h1>

      <SearchInput setQuery={ setQuery } />

      <CocktailList cocktails={ cocktails }
                    currentCount={ currentCount }
                    totalCount={ totalCount }
                    handlePrevious={ handlePrevious }
                    handleNext = { handleNext } />
    </>
  )
}
