import { PAGE_SIZE } from "../constants/Pagination";
import { CocktailSummary } from "./CocktailSummary"

export const CocktailList = ({ cocktails, currentCount, totalCount, handlePrevious, handleNext }) => {
  return (
    cocktails.length > 0 &&
    <>
      <div class="total-matches">
        Total matches: { totalCount }
      </div>

      <div>
        <div className="pagination-controls">
          <span className="page-details">
            Page { Math.ceil(currentCount / PAGE_SIZE) } of { Math.ceil(totalCount / PAGE_SIZE) }
          </span>

          { currentCount < totalCount ?
            <button className="page-next" onClick={ handleNext }>Next</button> : null
          }

          { currentCount > PAGE_SIZE ?
            <button className="page-previous" onClick={ handlePrevious }>Previous</button> : null
          }
        </div>

        <ul className="search-results">
            {cocktails.map((cocktail, id) => {
              return <CocktailSummary cocktail={cocktail} key={id} />;
            })}
        </ul>
      </div>
    </>
  )
}
