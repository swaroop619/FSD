// main.js
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a word: ', async (word) => {
  if (!word) {
    console.log('No input given.');
    rl.close();
    return;
  }

  // Dynamically import the stringUtils module only when input is provided
  const { capitalize } = await import('./stringUtils.js');

  const capitalizedWord = capitalize(word);
  console.log('Capitalized:', capitalizedWord);

  rl.close();
});
