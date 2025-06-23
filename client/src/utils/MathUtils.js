function generateRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

export { generateRandomInt };

class MathUtils {
  static generateRandomInt(maxInt) {
    return Math.floor(Math.random() * maxInt);
  }
}
export default MathUtils;
