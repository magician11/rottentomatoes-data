# rottentomatoes-data

Fetch Rotten Tomatoes data for a movie (if available).

Specifically, it'll search for a movie title, and if found on Rotten Tomatoes, will return:

- the tomato meter score (as a percentage)
- the tomato meter class
- the critics concensus
- the URL of the movie on Rotten Tomatoes
- the name of the movie
- the year of the movie
- the principal actors

## Installing

`npm install rottentomatoes-data`

## Usage

Running this code

```
const fetchRTdata = require('rottentomatoes-data');

const go = async () => {
  const data = await fetchRTdata('The Matrix');
  console.log(data);
};

go();
```

will output

```
{ ok: true,
  movie:
   { name: 'The Matrix',
     meterScore: 88,
     meterClass: 'certified_fresh',
     year: 1999,
     url: 'https://www.rottentomatoes.com/m/matrix',
     consensus:
      'Thanks to the Wachowskis\' imaginative vision, The Matrix is a smartly crafted combination of spectacular action and groundbreaking special effects.',
     actors: [ 'Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss' ] } }
```

An error response will look like

```
{ ok: false, error: 'movie_not_found' }
```

So check the `ok` parameter when processing the response.

## Notes

No API key is required for this to work. Thanks to @jaebradley for this info from his [rotten_tomatoes_client repo](https://github.com/jaebradley/rotten_tomatoes_client).
