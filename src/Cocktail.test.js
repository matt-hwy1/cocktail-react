import { render, screen } from "@testing-library/react";
import { CocktailDetail } from "./components/CocktailDetail";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api/data", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ data: "Mocked response" })
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("renders the cocktail detail information", () => {
  const cocktailId = "123";

  render(
    <Router initialEntries={[`/cocktails/${cocktailId}`]}>
      <Routes>
        <Route path="/cocktails/:id" element={<CocktailDetail />} />
      </Routes>
    </Router>
  );

  expect(screen.getByText("Cocktail")).toBeInTheDocument();
});
