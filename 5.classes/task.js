// задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }

    set state(state) {
      if (state < 0) {
        this._state = 0;
      } if (state >= 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  
    get state() {
      return this._state;
    }
  
  }
  
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
  
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
  
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
  
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
  
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// задача 2

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }
  
  addBook(book) {
    if (book.state > 30) {
      return this.books.push(book);
    }  
  }
  
  findBookBy(type, value) {
    return this.books.find(book => book[type] == value) || null;  
  }
  
  giveBookByName(bookName) {
    let book = this.findBookBy('name', bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
  }
}

// задача 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark > 1 && mark < 6) {
      if (subject in this.marks) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [mark];
      }
    }
  }

  getAverageBySubject(subject) {
    if (subject in this.marks) {
      let arr = this.marks[subject];
      let res = arr.reduce((acc, item) => acc + item, 0);
      return res / arr.length;
    } else {
      return 0;
    }
  }

  getAverage() {
    let sum = 0;
    let arr = Object.keys(this.marks);
    for (let item of arr) {
      sum += this.getAverageBySubject(item);
    }
    return sum / arr.length;
  }

}




  