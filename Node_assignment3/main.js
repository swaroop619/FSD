
import User, { validateEmail } from './user.js';

const user = new User('Alice');

console.log(user.getInfo()); 


const sampleEmail = 'alice@example.com';
const isValid = validateEmail(sampleEmail);

console.log(`Is "${sampleEmail}" valid?`, isValid); 
