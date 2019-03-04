const axios = require('axios');
const cheerio = require('cheerio');

const parseHTML = async url => {
  try {
    const response = await axios(url);
    return cheerio.load(response.data);
  } catch (error) {
    throw error;
  }
};

const fetchRottenTomatoesData = async movieTitle => {
  try {
    let $ = await parseHTML(
      `https://www.google.com/search?as_q=rotten+tomatoes+${movieTitle}`
    );

    // first find the Rotten Tomatoes URL on google for this movie
    const rottenTomatoesMatch = $('#search .g cite')
      .first()
      .text()
      .match(/(https:\/\/www\.rottentomatoes\.com\/m.+)/);

    // the data we are aiming to retrieve from Rotten Tomatoes
    const rottenTomatoesData = {
      meterScore: '',
      consensus: '',
      url: ''
    };

    /* 
    If we have found a valid Rotten Tomatoes URL from Google, 
    then go to that page and fetch some data
    */
    if (rottenTomatoesMatch) {
      const rottenTomatoesUrl = rottenTomatoesMatch[1];
      $ = await parseHTML(rottenTomatoesUrl);

      rottenTomatoesData.meterScore = $('#tomato_meter_link')
        .text()
        .trim()
        .replace('%', '');
      rottenTomatoesData.url = rottenTomatoesUrl;
      rottenTomatoesData.consensus = $(
        '.mop-ratings-wrap__text--concensus'
      ).text();
    }

    return rottenTomatoesData;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchRottenTomatoesData;

// const go = async () => {
//   try {
//     // const bestMovieEver = await lw5('Kusama: Infinity');
//     // console.log(bestMovieEver);
//     const data = await axios(
//       'https://www.rottentomatoes.com/api/private/v2.0/search/',
//       {
//         params: {
//           limit: 1,
//           q: 'The Matrix'
//         }
//       }
//     );

//     console.log(JSON.stringify(data.data, null, 2));
//   } catch (error) {
//     console.log(error);
//   }
// };

// go();
