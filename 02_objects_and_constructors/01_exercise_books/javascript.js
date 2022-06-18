function Book(title, author, numPages, read) {
    console.log(numPages);
    //   const didRead = (readYN) => readYN === "y";
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = Boolean(read === "y");
  
    // ASK WHY THIS FAILS
    // (read) => read === "y";
  
    // ASK WHY THIS WORKS
    // function () {
    //   return read === "y";
    // };
  
    const didRead = () => (this.read ? "READ" : "NOT READ");
  
    this.info = function () {
      return `${this.title} by ${this.author}, ${
        this.numPages
      } pages, is ${didRead()}`;
    };
  }
  
  const expanse = new Book("The Expanse", "dr.someone", 350, "y");
  
  console.log(this.numPages);
  console.log(expanse);
  