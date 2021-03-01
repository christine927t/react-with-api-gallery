# **React Gallery App**
## Live link: https://christine927t.github.io/react-gallery-app/
## *by Christine Treacy*
### Treehouse FSJS Techdegree Project 7

#### Description/Features: 
This is an app I built using React to display results from the Flickr API using Fetch API(Axios?). To search for images simply type in a keyword of your choice and hit Enter. 

## Built With:
**HTML**

**CSS**

**JavaScript**

**React**

**Fetch API**

## Future Improvements:


//Planning
///Components needed
-Search bar
    -stateful class
    -renders search box and magnifying glass button
-Navigation
    -stateless component
    -renders three buttons for keywords
-Results gallery
    -stateful component -photo container
    -stateless component - li and img elements
    -renders square gallery images in grid
-No Results 
    -stateless component
    -renders 'No results found' heading and paragraph text

//Flicker API
//config.js file the imports the API key (imported into App.js)
The config.js file should look something like this:
const apiKey = 'YOUR API KEY';
export default apiKey;


//Routes
//Create search link in App.js
//NavLinks for the navigation/keyword links
//current route reflected in url
//Switch element with Route tags for each three main topics nested inside

//Requesting data
//Should be done in App.js then passed to other components via props

//Displaying the data
//Each image needs a unique key prop
//name of page should be provided via props