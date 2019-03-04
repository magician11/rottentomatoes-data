# rottentomatoes-data

Fetch Rotten Tomatoes data for a movie (if available).

Specifically, it'll search for a movie title, and if found on Rotten Tomatoes, return:

- the tomato meter score (as a percentage)
- the critics concensus
- the URL of the movie on Rotten Tomatoes

## Usage

Running this code

```
const fetchRTdata = require('./index');

const go = async () => {
  const data = await fetchRTdata('Kusama: Infinity');
  console.log(data);
};

go();
```

will return

```
{ meterScore: '88',
  consensus:
   'Thanks to the Wachowskis\' imaginative vision, The Matrix is a smartly crafted combination of spectacular action and groundbreaking special effects.',
  url: 'https://www.rottentomatoes.com/m/matrix' }
```

## Notes

A faster way to get the TomatoMeter Score (and no critics consensus), is to use this code

```
  const response = await axios(
    'https://www.rottentomatoes.com/api/private/v2.0/search/',
    {
      params: {
        limit: 1,
        q: 'The Matrix'
      }
    }
  );

  console.log(response.data);
```

This will return

```
{ actorCount: 0,
  actors: [],
  criticCount: 0,
  critics: [],
  franchiseCount: 0,
  franchises: [],
  movieCount: 25,
  movies:
   [ { name: 'The Matrix',
       year: 1999,
       url: '/m/matrix',
       image:
        'https://resizing.flixster.com/Pe_35hKQIyI4CBM4ufrOkWxwiBc=/fit-in/80x80/v1.bTsxMTE2ODA5NjtqOzE4MDM5OzEyMDA7ODAwOzEyMDA',
       meterClass: 'certified_fresh',
       meterScore: 88,
       castItems: [Array],
       subline: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, ' } ],
  tvCount: 0,
  tvSeries: [] }
```

No API key is required for this to work. Thanks to @jaebradley for this info from his [rotten_tomatoes_client repo](https://github.com/jaebradley/rotten_tomatoes_client).
