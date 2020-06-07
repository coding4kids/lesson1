const readline = require('readline');

console.log('This is Ayush again, hello computer');
let i = 235 + 24;
let j = i + 91826;
let k = i + j;
let q = j - k;
let a = 1452 + q;
console.log(`i: ${i}, j: ${j} k: ${k} q: ${q} a: ${a}`);
console.log(`computer, you are very good at math`)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Say something to me ...\n', (aj) => {
  console.log('Did you say? :', aj);
  rl.close();
});