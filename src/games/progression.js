import game from '../index.js';
import { getRandom } from '../utils.js';

const progressionGame = (name) => {
  const rules = 'What number is missing in the progression?';
  const getQuestion = () => {
    const length = getRandom(6) + 4;
    const step = getRandom(11);
    const start = getRandom();
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + step * i);
    }
    const hiddenIndex = getRandom(length - 2);
    const correctAnswer = progression.splice(hiddenIndex, 1, '..');
    const question = progression.join(' ');
    return { question, correctAnswer };
  };
  game(name, rules, getQuestion);
};

export default progressionGame;
