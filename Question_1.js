/*Consider there is a 3 Boolean variable called a, 
 * b, c. Check if at least two out of three Booleans
 * are true with scanner
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the value of variable a (true/false): ', (a) => {
  rl.question('Enter the value of variable b (true/false): ', (b) => {
    rl.question('Enter the value of variable c (true/false): ', (c) => {
      // Convert input strings to boolean values
      a = (a === 'true');
      b = (b === 'true');
      c = (c === 'true');

      // Check if at least two out of three booleans are true
      if ((a && b) || (a && c) || (b && c)) {
        console.log('At least two out of three variables are true.');
      } else {
        console.log('Less than two variables are true.');
      }

      rl.close();
    });
  });
});