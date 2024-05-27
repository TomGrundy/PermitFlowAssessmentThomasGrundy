# Take home assessment for PermitFlow

### Author: Thomas Grundy

### Short description of approach taken
I have built out a straightforward UI that ingests the data stored in the backend and uses that to power what is rendered, instead of hardcoding a bunch of strings and logic flows in the UI.

This means the backend can power whether something is a radio button or how the questions flow from one to another, without having to futz with the React frontend (with limits of course).

My react components are styled with styled-components as that is what I am most used to in terms of css-in-js, compared to say Tailwind or just loading css files.

This is all client side rendered, as I just wanted to make a straightforward front-end consumer of a backend API that could also be used by a native app team potentially as well.

You load into the app and the backend returns, when not supplied with a questionGroup ID, the first in a series of questions, grouped together.

The ui renders these out, and provides either radio buttons, which allow for exclusive selection, or checkboxes, which are for multiselect.

These can then flow from page to page, depending on what the backend returns, or, if you are at the end of a flow, the UI renders out the requisite text associated with the outcome
of the questions selected. 

### How to build/run

The docker compose should let you just run this in docker, but if you want to just spin it up locally, follow the below:
- `npm install` should install dependencies.
- `npm run build` will compile up all that Typescript goodness, so good.
- `npm dev` runs the server.
- `npm test` run the tests.

Please let me know if you need anything further from me! you can reach me at hireme@thomasgrundy.com.