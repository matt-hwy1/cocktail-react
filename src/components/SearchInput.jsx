import "./css/search.css";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ setQuery }) => {
  function handleChange(event) {
    setQuery(event.target.value)
  }

  return (
    <div className="search">
      <FaSearch />
      <input autoFocus className="search-input" placeholder="Cocktail Name" onChange={handleChange} />
    </div>
  )
}
