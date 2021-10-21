import game from '../index.js';
import { getRandom, getRandomCalcAction, calcResult } from '../utils.js';

const calcGame = (name) => {
  const rules = 'What is the result of the expression?';
  const getQuestion = () => {
    const action = getRandomCalcAction();
    const num2 = action === '/' || action === '*' ? getRandom(10) : getRandom();
    const num1 = action === '/' ? num2 * getRandom(10) : getRandom();
    const correctAnswer = calcResult(num1, action, num2);
    const question = `${num1} ${action} ${num2}`;
    return { question, correctAnswer };
  };
  game(name, rules, getQuestion);
};

export default calcGame;
