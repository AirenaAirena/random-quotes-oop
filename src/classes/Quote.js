class Quote {
  constructor(id, text, autor) {
    this.id = id;
    this.text = text;
    this.autor = autor;
  }

  formatText() {
    return `${this.text}`;
  }
  formatAutor() {
    return `© ${this.autor}`;
  }
}

export default Quote;
