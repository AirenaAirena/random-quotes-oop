import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';
import config from '../../config.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, autor } = quotes[randomIndex];
    return new Quote(id, text, autor);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/quotes/random`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const quotes = [quote];
      if (Array.isArray(quotes) && quotes.length === 1) {
        const { id, quote: text, author } = quotes[0];
        if (id && text && author) {
          return new Quote(id, text, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, autor } = quote;
      return new Quote(id, text, autor);
    } catch (error) {
      console.log(error);
    }
  }
}
export default RandomQuote;
