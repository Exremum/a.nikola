let quotes = [];

function loadQuotes() {
  fetch('https://raw.githubusercontent.com/Exremum/a.nikola/main/a.nikola/quotes.json')
    .then(response => response.json())
    .then(data => {
      quotes = data;
      displayQuote();
      changeQuote();
    })
    .catch(error => console.error('Error fetching quotes:', error));
}

function displayQuote() {
  const quoteContent = document.getElementById('quote-content');
  if (quoteContent) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteContent.innerHTML = `<blockquote>${quote}</blockquote>`;
  }
}

function changeQuote() {
  const quoteContent = document.getElementById('quote-content');
  if (quoteContent) {
    quoteContent.addEventListener('click', displayQuote);
  }
}

document.addEventListener('DOMContentLoaded', loadQuotes);