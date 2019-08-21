const axios = require('axios');
const fetchRTdata = require('./index');

const go = async () => {
  try {
    const data = await fetchRTdata('The Matrix');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

go();
