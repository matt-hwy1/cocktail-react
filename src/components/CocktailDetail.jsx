import { useNavigate, useHistory } from "react-router-dom"
import { useState, useEffect, useParams } from "react";

export const CocktailDetail = ({ cocktailParams }) => {
  const URL = 'http://localhost/api/detail'
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState({})
  const cocktailId = useParams().id

  useEffect(() => {
    console.log("XXXXXXXXXXXXXXXXXXXXXX")
    if (cocktailParams) {
      setCocktail(cocktailParams)
    } else {
    fetch(`${URL}?id=${cocktailId}}`)
      .then((response) => response.json())
      .then((cocktailJson) => {
        setCocktail(cocktailJson);
     });
    }
  }, [cocktailId]);


  return (
    <>
      <div className="search-result">
        {cocktail.name}
      </div>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  )
}
