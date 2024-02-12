# About the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a React front end for a [Rails application](https://github.com/matt-hwy1/bartender) from a separate repository **already running** on port 3000 on [http://localhost:3000](http://localhost:3000) .

Clone this application via:
`git clone git@github.com:matt-hwy1/cocktail-react.git`

To start this project, you can run:

### `PORT=3001 npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Enhancements I'd add, given time, in rough order of importance
- More and better testing, and I'd probably incorporate Jest
- Adding error handling in case the API calls fail
- Client side caching of Cocktail data
- Breaking pagination out into a separate reusable component
- Using an off the shelf autocomplete and pagination component instead of writing it from scratch
- Have the "Back to Search" link in the Cocktail detail page link to the specific search query and pagination page
- Fixing the tests. Some of the tests in the React app are not passing, and they also aren't providing much coverage, but I left them in for reference. I didn't have time in the project parameters to get them done and working. I am relatively new to React, having gained all my experience with it in the last year, based on the project structure at my current job (which is pre-alpha and does not include tests yet, an issue I described on our call). React is also a much smaller part of my job compared to the Rails and Kotlin work I do. So compared to my Rails skills, my React skills are relatively less. Rails and vanilla Javascript (and Vue) are more my core skill set, and while I enjoy the React side of things, I just haven't had nearly as much exposure to it.
