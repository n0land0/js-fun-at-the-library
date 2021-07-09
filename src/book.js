function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return mainCharacter;
}

function saveReview(review, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (review === reviews[i]) {
      return;
    }
  }
  reviews.push(review);
  // return reviews;
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length*20;
  return bookPageCount;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: title.length*20,
    genre: genre
  }
  return book;
}

function editBook(book) {
  book.pageCount = book.pageCount*.75;
  return book.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
