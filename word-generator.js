const firstPhrase = ["Get out of bed,", "Hurry up,", "Come on,"];

const secondPhrase = [
  " you jabroni,",
  " it's a beautiful day,",
  " there are spiders everywhere,",
];

const thirdPhrase = [
  " let's make the best of it.",
  " we gotta run!",
  " don't ruin this for me.",
];

function wordGenerator() {
  return (
    firstPhrase[Math.floor(firstPhrase.length * Math.random())] +
    secondPhrase[Math.floor(secondPhrase.length * Math.random())] +
    thirdPhrase[Math.floor(thirdPhrase.length * Math.random())]
  );
}

console.log(wordGenerator());
