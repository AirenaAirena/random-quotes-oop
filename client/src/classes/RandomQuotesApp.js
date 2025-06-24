import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuotePublicAPIBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      'random-quote-own-api-btn'
    );
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAutorElement = document.getElementById('quote-autor');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAutorElement.textContent = this.currentQuote.formatAutor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaPublicAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaPublicAPI());
  }
  async handleRandomQuoteViaOwnAPI() {
    this.changeCurrentQuote(await RandomQuote.getRandomQuoteViaOwnAPI());
  }

  /*async handleRandomQuoteViaAPI(apiIsOwn = false){
this.changeCurrentQuote(
apoIsOwn?await RandomQuote.getRandomQuoteViaOwnAPI():RandomQuote.getRandomQuoteViaPublicAPI());}*/

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaPublicAPI()
    );
    this.randomQuoteOwnAPIBtn.addEventListener(
      'click',
      () => this.handleRandomQuoteViaOwnAPI() //(true)
    );
  }
}
export default RandomQuotesApp;
