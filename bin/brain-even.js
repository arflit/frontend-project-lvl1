#!/usr/bin/env node
import askName from '../src/cli.js';
import evenGame from '../src/even.js';

console.log('Welcome to the Brain Games!');
const name = askName();
evenGame(name);
