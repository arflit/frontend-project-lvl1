import game from '../index.js';
import { getRandom, calcGcd } from '../utils.js';

const gcdGame = (name) => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const num1 = getRandom();
    const num2 = getRandom();
    const correctAnswer = calcGcd(num1, num2);
    const question = `${num1} ${num2}`;
    return { question, correctAnswer };
  };
  game(name, rules, getQuestion);
};

export default gcdGame;
