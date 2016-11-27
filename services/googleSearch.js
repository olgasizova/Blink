const fetch = require('node-fetch');

function textSearch(req, res, next) {
  searchTerms = req.body.searchTerms;
  const API_ENDPOINT = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchTerms}&key=${process.env.GOOGLE_PLACES_KEY}`;
  fetch(API_ENDPOINT)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.log(`--> Google Text Search Error: ${err}`);
    next(err);
  })
}
function imgSearch(req, res, next) {
  let searchResults = res.data.results;
  let resultsLength = res.data.results.length;
  let promiseCounter = 0;
  let getImgs = new Promise((Resolve, Reject) => {
    let appendImg = searchResults.map((result, i) => {
      if(result.photos === undefined) {
        console.log(`img ref not found: ${i}, ${result.name}`);
        result.place_img = 'http://i.imgur.com/s4dTtBy.jpg'
        promiseCounter++;
      } else {
        let API_ENDPOINT = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${result.photos[0].photo_reference}&key=${process.env.GOOGLE_PLACES_KEY}`
        fetch(API_ENDPOINT)
        .then((r) => {
          result.place_img = r.url;
          promiseCounter++;
          if(promiseCounter == resultsLength) {
            Resolve('Saved Image URLS to object')
          }
        })
      }
    })
  })
  getImgs.then(() => {
    next()
  })
}
module.exports = {
  textSearch,
  imgSearch
}
