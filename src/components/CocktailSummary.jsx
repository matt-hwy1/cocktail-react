import './css/cocktail.css';
import { useNavigate, useHistory } from "react-router-dom"
import PATHS from '../constants/routing/Paths'

export const CocktailSummary = ({ cocktail }) => {
  const navigate = useNavigate();

  function showCocktail(cocktail) {
    navigate(PATHS.COCKTAIL_DETAIL_PATH.replace(':id', cocktail.id))
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
