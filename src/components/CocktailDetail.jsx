import { useParams} from "react-router-dom"
import { useState, useEffect, useCallback } from "react";
import URLS from '../constants/routing/Urls'
import { CocktailIngredient } from "./CocktailIngredient"

export const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({})
  const cocktailId = useParams().id

  const fetchCocktail = () => {
    fetch(`${URLS.COCKTAIL_DETAIL_API_URL}?id=${cocktailId}`)
      .then((response) => response.json())
      .then((cocktailJson) => {
        setCocktail(cocktailJson["drinks"][0]);
     });
    }

  useEffect(() => {
    fetchCocktail()
  }, []);

  useEffect(() => {
    document.title = `Bartender: ${cocktail.name}`
  }, [cocktail])

  return (
    cocktail.id != undefined &&
    <>
      <div className="cocktail-detail">
        <a href="/" className="btn">
          Back to Search
        </a>
        <div className="cocktail-main-details">
          <div className="cocktail-detail-name">
            {cocktail.name}
          </div>
          <img className="cocktail-image" src={cocktail.image}/>
        </div>

        <div className="cocktail-item">
          <span className="heading">Category: </span>
          <span className="value">{cocktail.category}</span>
        </div>
        <div className="cocktail-item">
          <span className="heading">Container: </span>
          <span className="value">{cocktail.container}</span>
        </div>
        <div className="cocktail-item">
          <span className="heading">Instructions: </span>
          <br/><br/>
          <span className="value">{cocktail.instructions}</span>
        </div>

        <hr/>
        <h2>Ingredients</h2>

        <ul className="cocktail-ingredients">
          {cocktail.ingredients && cocktail.ingredients.map((ingredient, id) => {
            return <CocktailIngredient ingredient={ingredient} key={id} />;
          })}
        </ul>
      </div>
    </>
  )
}
