const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {
  it('provides, via callback, breed details for the Bombay breed', (done) => {
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const returnDesc = breedDetailsFromFile('Bombay', (data) => data);
    
    breedDetailsFromFile('Bombay', (bombay) => {
      const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expectedDesc, bombay);
      done(); 
    });      

    //done(breedDetailsFromFile('Bombay', (data) => data))
  });

  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done(); 
    });      
  });
});

// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function(done) {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) done(err);
//         else done();
//       });
//     });
//   });
// });