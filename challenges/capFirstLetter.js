// Capitalize first letter of each word

const phrase = 'I am the phrase that you will use for this.';

function capAllThings(str) {
  const x = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1));

  return x;
}

console.log(capAllThings(phrase));
