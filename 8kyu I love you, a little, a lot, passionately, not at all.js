// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//     "I love you"
//     "a little"
//     "a lot"
//     "passionately"
//     "madly"
//     "not at all"

// If there are more than 6 petals, you start over with "I love you" and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
    let phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    
    if(nbPetals <= 6){
      return phrases[nbPetals-1]
    } else if (nbPetals > 6){
      if ((nbPetals%6) === 0) {
        return phrases[5]
      } else {
        return phrases[(nbPetals%6)-1]
      }
    }
  }

// function howMuchILoveYou(nbPetals) {
//     let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//     return petals[(nbPetals-1) % 6];
//   }