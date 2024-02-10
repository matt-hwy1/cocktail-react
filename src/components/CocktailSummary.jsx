import './css/cocktail.css';
import { useNavigate, useHistory } from "react-router-dom"

export const CocktailSummary = ({ cocktail }) => {
  const navigate = useNavigate();

  function showCocktail(cocktail) {
    navigate(`/cocktails/${cocktail.id}`, { cocktail })
  }

  return (
    <div className="cocktail-summary" onClick={(e) => showCocktail(cocktail)}>
      <div className="cocktail-name">
        {cocktail.name}
      </div>
      <img className="cocktail-thumb" src={cocktail.image}/>
    </div>
  )
}
