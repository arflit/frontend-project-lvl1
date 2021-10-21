import readlineSync from 'readline-sync';

const game = (name, rules, getQuestion) => {
  console.log(rules);
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = getQuestion();
    const answer = readlineSync.question(`Question: ${question}
    Your answer: `);
    const result = String(answer) === String(correctAnswer);
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

export default game;
