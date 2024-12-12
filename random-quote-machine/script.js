const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Do or do not. There is no try.", author: "Yoda" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
];

function getRandomQuote() {
  newIndex = Math.floor(Math.random() * quotes.length);
  return quotes[newIndex];
}

function setNewQuote() {
  const quote = getRandomQuote();
  document.getElementById('text').innerText = `"${quote.text}"`;
  document.getElementById('author').innerText = `- ${quote.author}`;
  
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`;
  document.getElementById('tweet-quote').setAttribute('href', tweetUrl);
}
setNewQuote();

document.getElementById('new-quote').addEventListener('click', setNewQuote);