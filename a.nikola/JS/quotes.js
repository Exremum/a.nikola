let quotes = [];

function loadQuotes() {
  fetch('https://vk.com/away.php?to=https%3A%2F%2Fraw.githubusercontent.com%2FExremum%2Fa.nikola%2Fmain%2Fa.nikola%2Fquotes.json&cc_key=')
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
