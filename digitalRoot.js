// let digitalRoot = (n) => {
//   result = 0;
//   for (let i = 0; i < n.toString().length; i++) {
//     result += Math.floor(n.toString()[i]);
//   }
//   return result;
// }

// console.log(digitalRoot(195));

// let digitalRoot2 = (n) => {
//   let arr = n.toString().split('');
// }

// console.log(digitalRoot2(123));

const digitalRoot3 = (number) => {
  const numArr = number.toString().split("");
  return numArr.reduce((acc, value) => {
    return Number(acc) + Number(value);
  }, 0);
};

console.log(digitalRoot3(154));
