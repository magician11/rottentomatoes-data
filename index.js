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
      `https://www.rottentomatoes.com/search/?search=+${movieTitle}`
    );

    const movieData = $.html().match(/movies":(.+),"tvCount"/);

    // the data we are aiming to retrieve from Rotten Tomatoes
    const rottenTomatoesData = {
      meterScore: '',
      consensus: '',
      url: ''
    };

    if (movieData) {
      // first find the Rotten Tomatoes URL on google for this movie
      const rottenTomatoesUrl = `https://www.rottentomatoes.com${
        JSON.parse(movieData[1])[0].url
      }`;

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
