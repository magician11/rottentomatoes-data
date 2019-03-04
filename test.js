const fetchRTdata = require('./index');

const go = async () => {
  const data = await fetchRTdata('The Matrix');
  console.log(data);
};

go();
