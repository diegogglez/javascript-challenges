// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

const example = 'hey whatsup fellas';

const spinWords = (text) => {
  const textArr = text.split(' ');
  const modifiedArr = [];
  textArr.forEach(item => {
    if (item.length >= 5) {
      item = item.split('').reverse().join('');
    }
    modifiedArr.push(item);
  })
  return modifiedArr.join(' ');
}

console.log(spinWords(example));