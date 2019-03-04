const fetchRTdata = require('./index');

const go = async () => {
  const data = await fetchRTdata('Kusama: Infinity');
  console.log(data);
  /*
  { meterScore: '93',
  consensus:
   'Kusama: Infinity shines a richly deserved spotlight on its subject\'s brilliant work while opening a fascinating - albeit necessarily incomplete - window into her personal life.',
  url: 'https://www.rottentomatoes.com/m/kusama_infinity' }
  */
};

go();
