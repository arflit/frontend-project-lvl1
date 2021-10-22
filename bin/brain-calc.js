#!/usr/bin/env node
import askName from '../src/cli.js';
import calcGame from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
const name = askName();
calcGame(name);
