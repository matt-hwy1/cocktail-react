import { CocktailSummary } from "./CocktailSummary"

export const CocktailList = ({ cocktails }) => {
  return (
    cocktails["drinks"] != undefined &&
    <div>
      <ul className="search-results">
          {cocktails["drinks"].map((cocktail, id) => {
            return <CocktailSummary cocktail={cocktail} key={id} />;
          })}
        </ul>
      </div>
  )
}
