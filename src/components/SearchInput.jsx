import './css/search.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ setResults, url }) => {
  const [query, setQuery] = useState("")

  function handleChange(event) {
    fetch(`${url}?query=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        setResults(json);
      });
  }

  return (
    <div className="search">
      <FaSearch />
      <input autoFocus className="search-input" placeholder="Cocktail Name" onChange={handleChange} />
    </div>
  )
}
