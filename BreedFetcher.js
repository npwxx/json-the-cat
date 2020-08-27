const request = require('request');

const userInput = process.argv[2];
const url = (`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`);

request(url, (error, response, body) => {
  if (error) {
    console.log('Ruhroh! Something went wrong!', error);
    return;
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Ruhroh! Breed not found!");
    }
    console.log(data[0].description);
  }//console.log(typeof data);
});