# rottentomatoes-data

Fetch Rotten Tomatoes data for a movie (if available).

Specifically, it'll search for a movie title, and if found on Rotten Tomatoes, return:

- the tomato meter score (as a percentage)
- the critics concensus
- the URL of the movie on Rotten Tomatoes
- the name of the movie
- the year of the movie

## Usage

Running this code

```
const fetchRTdata = require('./index');

const go = async () => {
  const data = await fetchRTdata('The Matrix');
  console.log(data);
};

go();
```

will return

```
{ name: 'The Matrix',
  meterScore: 88,
  year: 1999,
  url: 'https://www.rottentomatoes.com/m/matrix',
  consensus:
   'Thanks to the Wachowskis\' imaginative vision, The Matrix is a smartly crafted combination of spectacular action and groundbreaking special effects.' }
```

## Notes

No API key is required for this to work. Thanks to @jaebradley for this info from his [rotten_tomatoes_client repo](https://github.com/jaebradley/rotten_tomatoes_client).
