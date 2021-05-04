const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (err, data) => {
    console.log("In readFile's Callback: it has the data.");
    if(err){
      functionToRunWhenThingsAreDone(undefined)
    } else {
      functionToRunWhenThingsAreDone(data)
    }
  });
};

module.exports = breedDetailsFromFile;

//breedDetailsFromFile('Bombay', (data) => console.log('Return Value: ', data));
