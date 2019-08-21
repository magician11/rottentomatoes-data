const axios = require('axios');
const fetchRTdata = require('./index');

const go = async () => {
  try {
    const data = await fetchRTdata('the matrix');
    console.log(
      `The Rotten Tomatoes score for ${data.name} (${data.year}) is ${
        data.meterScore
      }%`
    );
    console.log(`Critics Consensus: ${data.consensus}`);
    console.log(`Actors: ${data.actors}`);
  } catch (error) {
    console.log(error);
  }
};

go();
