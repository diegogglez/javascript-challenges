const digitalRoot3 = (number) => {
  const numArr = number.toString().split("");
  return numArr.reduce((acc, value) => {
    return Number(acc) + Number(value);
  }, 0);
};

console.log(digitalRoot3(154));
