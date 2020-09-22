const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = (breed, callBack) => {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data");

    if (!error) callBack(data);
    if (error) callBack(undefined);
  });

};

// const printCatBreed = breed => {
//   console.log('Return Value: ', breed);
// };

module.exports = breedDetailsFromFile;


// breedDetailsFromFile('Bombay', printCatBreed);
