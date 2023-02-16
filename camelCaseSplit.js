// Complete the solution so that the function will break up camel casing, using a space between words.
// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"

const isUpperCase = (letter) => letter === letter.toUpperCase();

const camelCaseSpliter = (str) => {
  if (str.split('').some(isUpperCase)) {
    const strArr = str.split('');
    let strSplited = '';

    for (let letter of strArr) {
      letter === letter.toUpperCase() 
        ? strSplited += ' ' + letter
        : strSplited += letter;
    }

    return strSplited;

  } else return str;
} 


console.log(camelCaseSpliter('camelCasing'));
console.log(camelCaseSpliter('otherDoFirstSeem'));
console.log(camelCaseSpliter('helloFellas'));
console.log(camelCaseSpliter('hello'));

