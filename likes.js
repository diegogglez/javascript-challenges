// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

//? Array examples
const arr = []                                // -->  "no one likes this"
const arr1 = ["Peter"]                        // -->  "Peter likes this"
const arr2 = ["Jacob", "Alex"]                // -->  "Jacob and Alex like this"
const arr3 = ["Max", "John", "Mark"]          // -->  "Max, John and Mark like this"
const arr4 = ["Alex", "Jacob", "Mark", "Max"] // -->  "Alex, Jacob and 2 others like this"

//?SOLUTION 1:

const likes = (names) => {
  if (!names.length) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes(arr));
// console.log(likes(arr1));
// console.log(likes(arr2));
// console.log(likes(arr3));
// console.log(likes(arr4));


//?SOLUTION 2:

const likes2 = (names) => {
  const templates = [
    'no one likes this',
    '{name} likes this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  //Math.min  returns the smallest of the numbers given as input parameters 
  let index = Math.min(names.length, 4);
  
  //.shift() deletes the first item of the array and return it
  return templates[index].replace(/{name}|{n}/g, (val) => {
    return val === '{name}' ? names.shift() : names.length;
  });
}

console.log(likes2(arr));
console.log(likes2(arr1));
console.log(likes2(arr2));
console.log(likes2(arr3));
console.log(likes2(arr4));



