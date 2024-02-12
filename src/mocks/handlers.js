import { rest } from 'msw';
const cocktailId = 123;

export const handlers = [
  rest.get(`/api/detail/${cocktailId}`, (req, res, ctx) => {
    // Simulate a successful response with mock data
    return res(
      ctx.status(200),
      ctx.json({"drinks":[{
        "id":2210,
        "name":"Margarita",
        "category":"Ordinary Drink",
        "container":"Cocktail glass",
        "instructions":"Instructions for a Margarita",
        "image":"https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
        "ingredients":[
          {"name":"Tequila","measurement":"1 1/2 oz"},
          {"name":"Triple sec","measurement":"1/2 oz"},
          {"name":"Lime juice","measurement":"1 oz"}
        ]}
      ]})
    );
  }),
];
