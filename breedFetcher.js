const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`);
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("Ruhroh! Breed not found!");
      }
      callback(null, data[0].desc);
    }
  });
};

module.exports = { fetchBreedDescription };