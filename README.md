This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

First you need to run

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Adding a CSS Preprocessor (Sass, Less etc.)
Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a `.Button` CSS class in `<AcceptButton>` and `<RejectButton>` components, we recommend creating a `<Button>` component with its own `.Button` styles, that both `<AcceptButton>` and `<RejectButton>` can render (but [not inherit](https://facebook.github.io/react/docs/composition-vs-inheritance.html)).

Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable. In this walkthrough, we will be using Sass, but you can also use Less, or another alternative.

We used:

import React from 'react';
import logo from './logo.png';

Create React App doesn't prescribe a specific routing solution.

I added [React Router](https://reacttraining.com/react-router/) because it is the most popular one ;-)

//////////////////////////////////////////////////////////////////////////////////////////////////////

Folders and file structure:

In src/Containers folder are the 2 pages Activities ( list of activities by selected town in URL) and Tour (details of selected tour).

src/App.css is preprocessed App.scss and included in App.js file after the import of foundation.min.css.

src/earth.gif is used as a loader (when waiting ajax request to resolve).

src/logo.png is logo of the company.

src/registerServiceWorker.js https://developers.google.com/web/fundamentals/primers/service-workers/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

Additional explanation:

In src/App.js I put a router so we can navigate between pages (with switch to be sure only one is used per time and with exact parameter so that only one route can correspond to one url).
Also there is a header and footer part.

In src/Containers/Activities/index.js and src/Containers/Tour/index.js I used fetch for ajax call as it is now supported in all browsers https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
P.S. I didn't configure any parameters since they were both get calls and this is just exercise :-)
