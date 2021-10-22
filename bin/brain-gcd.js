#!/usr/bin/env node
import askName from '../src/cli.js';
import calcGcd from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
const name = askName();
calcGcd(name);
