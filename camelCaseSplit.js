// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

const isUpperCase = (letter) => letter === letter.toUpperCase();

//* Solution 1 (iteration loop):

const camelCaseSpliter = (str) => {
  if (str.split('').some(isUpperCase)) {
    const strArr = str.split('');
    let strSplited = '';

    for (let letter of strArr) {
      letter === letter.toUpperCase() 
        ? strSplited += ' ' + letter
        : strSplited += letter;
    }

    return strSplited.trim();

  } else return str.trim();
} 

console.log(camelCaseSpliter('camelCasing'));
console.log(camelCaseSpliter('otherDoFirstSeem'));
console.log(camelCaseSpliter('helloFellas'));
console.log(camelCaseSpliter('hello'));
console.log(camelCaseSpliter('Hello'));

//* Solution 2 (regular expressions and replace method):

const camelCaseSpliter2 = (string) => string.replace(/([A-Z])/g, ' $1').trim();

console.log(camelCaseSpliter2('camelCasing'));
console.log(camelCaseSpliter2('otherDoFirstSeem'));
console.log(camelCaseSpliter2('helloFellas'));
console.log(camelCaseSpliter2('hello'));
console.log(camelCaseSpliter2('Hello'));


//* Solution 3 (spread operator and map method):

// let stringTest = 'hola';
// let stringTest2 = [...stringTest];

// console.log(stringTest);
// console.log(stringTest2);

const camelCaseSpliter3 = string => {
  return [...string].map(
    (char) => char === char.toUpperCase() ? ` ${char}` : char
    ).join('');
}

console.log(camelCaseSpliter3('hola'));
console.log(camelCaseSpliter3('holaBuenas'));





