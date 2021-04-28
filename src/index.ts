const names = ['Lee', 'Fred'];

// No pushing into arrays! Immutability only
const moreNames = [...names, 'Joe'];

// Can't do this, it modifies the array
// const finalName = moreNames.pop();

// Using object methods is okay, so long as they don't mutate the object
const allNamesJoined = moreNames.join(', ');

// This is okay, we're making an array, not modifying the string
// const splitNames = allNamesJoined.split(', ');

const message = `Hello ${allNamesJoined}`;

// This is already wrong - side effect!
// Basically, every function's output must be a returned value
// eslint-disable-next-line functional/no-expression-statement
console.log(message);
