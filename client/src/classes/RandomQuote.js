import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, autor } = quotes[randomIndex];
    return new Quote(id, text, autor);
  }

  static async getRandomQuoteViaAPI() {
    const url = 'https://dummyjson.com/quotes/random';
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

  // static getRandomQuoteViaAPI() {
  //   const url = 'https://dummyjson.com/quotes/random';
  //   const options = { headers: { 'Content-Type': 'application/json' } };
  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then(({ _id: id, quote: text, author }) => new Quote(id, text, author))
  //     .catch((error) => console.error(error));
  // }
}
export default RandomQuote;
