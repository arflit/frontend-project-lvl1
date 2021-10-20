import readlineSync from 'readline-sync';

const getRandom = () => Math.floor(Math.random() * 100) + 1;

const isEven = (number) => number % 2 === 0;

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandom();
    const answer = readlineSync.question(`Question: ${number}
    Your answer: `);
    const even = isEven(number);
    const correctAnswer = even ? 'yes' : 'no';
    const result = answer === correctAnswer;
    if (result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
      win = false;
      break;
    }
  }
  if (win) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
