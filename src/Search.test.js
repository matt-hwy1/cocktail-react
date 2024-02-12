import { render, screen } from "@testing-library/react";
import { CocktailSearch } from "./components/CocktailSearch";
import { SearchInput } from "./components/SearchInput";

test("renders the search page text", () => {
  render(<CocktailSearch />);
  const searchText = screen.getByText(/search/i);
  const cocktailText = screen.getByText(/cocktail/i);
  expect(searchText).toBeInTheDocument();
  expect(cocktailText).toBeInTheDocument();
});

test("renders the search page input", () => {
  render(<SearchInput />);
  const searchInput = screen.getByPlaceholderText(/cocktail name/i);
  expect(searchInput).toBeInTheDocument();
});
