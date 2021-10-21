#!/usr/bin/env node
import askName from '../src/cli.js';
import progression from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
const name = askName();
progression(name);
