const fetchRTdata = require('./index');

const go = async () => {
  try {
    data = await fetchRTdata('An Inconvenient Truth');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

go();
