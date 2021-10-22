import game from '../index.js';
import { getRandom, isEven } from '../utils.js';

const evenGame = (name) => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestion = () => {
    const question = getRandom();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  game(name, rules, getQuestion);
};

export default evenGame;
