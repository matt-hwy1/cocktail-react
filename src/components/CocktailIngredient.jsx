import './css/cocktail.css';

export const CocktailIngredient = ({ ingredient }) => {
  return (
    <div className="cocktail-ingredient">
      {ingredient.measurement} {ingredient.name}
      <hr/>
    </div>
  )
}
