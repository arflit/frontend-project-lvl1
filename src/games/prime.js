import game from '../index.js';
import { getRandom, isPrime } from '../utils.js';

const primeGame = (name) => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestion = () => {
    const question = getRandom();
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };
  game(name, rules, getQuestion);
};

export default primeGame;
