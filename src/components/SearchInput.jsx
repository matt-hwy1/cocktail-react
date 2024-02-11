import './css/search.css';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ setResults, url, count_url }) => {
  const [query, setQuery] = useState("")
  const [count, setCount] = useState("")

  function handleChange(event) {
    setQuery(event.target.value)

    fetch(`${url}?query=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        setResults(json)
      });

    fetch(`${count_url}?query=${event.target.value}`)
      .then((response) => response.json())
      .then((json) => {
        setCount(json["count"])
      });
  }

  return (
    <div className="search">
      <FaSearch />
      <input autoFocus className="search-input" placeholder="Cocktail Name" onChange={handleChange} />
    </div>
  )
}
