// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

const str = 'Ccudl';

const duplicateEncode = (string) => {
  const arr = string.toLowerCase().split('');
  //? Comparamos el índice de cada elemento con el índice de la primera ve que ese elemento ocurre, si es distinto está duplicado
  const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
  const encodedArr = [];
  arr.forEach(item => duplicates.indexOf(item) !== -1 ? encodedArr.push(')') : encodedArr.push('('));
  return encodedArr.join('');
}

console.log(duplicateEncode(str));



