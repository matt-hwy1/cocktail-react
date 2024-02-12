import "./css/cocktail.css";

export const CocktailIngredient = ({ ingredient }) => {
  return (
    <li className="cocktail-ingredient">
      {ingredient.measurement} {ingredient.name}
    </li>
  )
}
