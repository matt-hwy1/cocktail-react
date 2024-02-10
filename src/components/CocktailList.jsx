import { CocktailSummary } from "./CocktailSummary"

export const CocktailList = ({ cocktails }) => {
  return (
    <div>
      <ul className="search-results">
          {cocktails["drinks"] && cocktails["drinks"].map((cocktail, id) => {
            return <CocktailSummary cocktail={cocktail} key={id} />;
          })}
        </ul>
      </div>
  )
}
