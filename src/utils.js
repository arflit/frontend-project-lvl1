export const getRandom = (max = 100) => Math.floor(Math.random() * max) + 1;
export const isEven = (number) => number % 2 === 0;
export const getRandomCalcAction = () => {
  const random = Math.random();
  if (random < 0.33) {
    return '+';
  }
  if (random < 0.66) {
    return '-';
  }
  // if (random < 0.75) {
  //   return '/';
  // }
  return '*';
};

export const calcResult = (num1, action, num2) => {
  const number1 = Number(num1);
  const number2 = Number(num2);
  switch (action) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
  }
  return NaN;
};

export const calcGcd = (x, y) => {
  let gcd = 0;
  for (let i = 1; i <= x; i += 1) {
    if (x % i === 0 && y % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

export const isPrime = (x) => {
  if (x < 4) return true;
  for (let i = 2; i <= Math.sqrt(x); i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};
