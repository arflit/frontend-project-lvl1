#!/usr/bin/env node
import askName from '../src/cli.js';
import primeGame from '../src/games/prime.js';

console.log('Welcome to the Brain Games!');
const name = askName();
primeGame(name);
