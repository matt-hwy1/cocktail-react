import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the search page text", () => {
  render(<App />);
  const searchText = screen.getByText(/search/i);
  const cocktailText = screen.getByText(/cocktail/i);
  expect(searchText).toBeInTheDocument();
  expect(cocktailText).toBeInTheDocument();
});

