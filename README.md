# About the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a React front end for a [Rails application](https://github.com/matt-hwy1/bartender) from a separate repository **already running** on port 3000 on [http://localhost:3000](http://localhost:3000) .

To start this project, you can run:

### `PORT=3001 npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Enhancements I'd add, given time, in rough order of importance
- More and better testing, and I'd probably incorporate Jest
- Client side caching of Cocktail data
- Breaking pagination out into a separate reusable component
- Using an off the shelf autocomplete and pagination component instead of writing it from scratch
- I'd have the "Back to Search" link in the Cocktail detail page link to the specific search query and pagination page
