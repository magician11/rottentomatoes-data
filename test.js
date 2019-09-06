const axios = require('axios');
const fetchRTdata = require('./index');

const go = async movieTitle => {
  try {
    const data = await fetchRTdata(movieTitle);

    if (data.ok) {
      const { movie } = data;
      console.log(movie);
      console.log(
        `The Rotten Tomatoes score for ${movie.name} (${movie.year}) is ${movie.meterScore}% (${movie.meterClass})`
      );
      console.log(`Critics Consensus: ${movie.consensus}`);
      console.log(`Actors: ${movie.actors.join(', ')}`);
      console.log(`Webpage: ${movie.url}`);
    } else {
      console.log(
        `Something went wrong when looking up the movie "${movieTitle}": ${data.error}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

const movieTitle = 'Matrix';

go(movieTitle);
