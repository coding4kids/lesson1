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
/**
 * git commands
 * 1 git status
 * 2 git add .
 * 3 git status
 * 4 git commit -m 'message'
 * 5 git push
 */

/* + add
- subtract
* multiplication
/ division 
*/

rl.question('give me a number ...\n', (aj) => {
  let num = Number.parseInt(aj);
 
console.log(`${num}/2 = ${num/2} 
${num}*2 = ${num*2} 
${num}+2 = ${num+2} 
${num}-2 = ${num-2}`);

  rl.close();
});