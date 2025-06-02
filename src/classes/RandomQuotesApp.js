import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAutorElement = document.getElementById('quote-autor');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    const { text, autor } = this.currentQuote;
    this.quoteTextElement.textContent = text;
    this.quoteAutorElement.textContent = autor;
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}
export default RandomQuotesApp;
