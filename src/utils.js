export const getRandom = (max = 100) => Math.floor(Math.random() * max) + 1;
export const isEven = (number) => number % 2 === 0;
export const getRandomCalcAction = () => {
  const random = Math.random();
  if (random < 0.25) {
    return '+';
  }
  if (random < 0.5) {
    return '-';
  }
  if (random < 0.75) {
    return '/';
  }
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
