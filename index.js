const axios = require('axios');
const cheerio = require('cheerio');

const fetchRottenTomatoesData = async movieTitle => {
  try {
    const res = await axios(
      `https://www.rottentomatoes.com/api/private/v2.0/search?limit=1&q=${movieTitle
        .split(' ')
        .join('+')}`
    );

    if (res.data.movieCount > 0) {
      const movie = res.data.movies[0];

      const rottenTomatoesUrl = `https://www.rottentomatoes.com${movie.url}`;

      const response = await axios(rottenTomatoesUrl);
      const $ = await cheerio.load(response.data);
      const actors = movie.subline.split(', ');
      actors.pop(); // remove last empty element

      const { name, meterScore, meterClass, year } = movie;

      return {
        ok: true,
        movie: {
          name,
          meterScore: meterScore ? meterScore : '',
          meterClass,
          year,
          url: rottenTomatoesUrl,
          consensus: $('.mop-ratings-wrap__text--concensus').text(),
          actors
        }
      };
    }

    return { ok: false, error: 'movie_not_found' };
  } catch (error) {
    throw error;
  }
};

module.exports = fetchRottenTomatoesData;
