# Natural Disaster Tracker

[Render Website Link](https://wondrous-crepe-3dfb3a.netlify.app/)

## Group Members
Philip Nguyen, Ai Tran

## Visual Studio Code

Download [Visual Studio Code](https://code.visualstudio.com/download).

Open Visual Studio Code, download and install [npm](https://www.npmjs.com/package/npm) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).

Download the project, and make sure to open the [terminal](https://code.visualstudio.com/docs/terminal/basics) and type npm install react-scripts to download the necessary node_modules.

## Google Map API

[Google Map API](https://mapsplatform.google.com/)

A key is required if you want to run the project locally or on a different site. Create one with the link above. After getting your API key, open Map.js located in src/components, head into the GoogleMapAPI section and paste your API key in between the quotes.

Open the terminal and type yarn start to start the react app.

## EONET API

[EONET API](https://eonet.gsfc.nasa.gov/)

EONET API is used in the project to get the location, names, and additional information for each disaster marker. 

To get data from the API, this [page](https://eonet.gsfc.nasa.gov/api/v3/events) contains the information, the data can be fetch.

## TESTING

[Cypress](https://www.cypress.io/how-it-works) is used for testing the project.

To run the test, first ensure that you have Cypress installed. After installation, press ctrl+shift+b and type cypress and select Run Cypress in UI Mode. Cypress should then be launched allowing you to select a compatible browser.
