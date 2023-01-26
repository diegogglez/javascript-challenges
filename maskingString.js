// return masked string
let bankNumber = "632115dasdasfgaadsad84t51";
function maskify(string) {
  let modifiedString = "";
  for (let i = 0; i < string.length; i++) {
    if (i < string.length - 4) {
      modifiedString += "#";
    } else {
        modifiedString += string[i];
    }
  }         
  return modifiedString;
}

console.log(maskify(bankNumber));
