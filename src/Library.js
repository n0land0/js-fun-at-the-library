function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
};

function addBook(library, book) {
    // library.shelves.fantasy.push(book);
    library.shelves[book.genre].push(book);
    // library.shelves.fantasy[i];
    // library.shelves.fiction[i];
    // library.shelves.nonFiction[i];

    // book.genre;

    // var bookGenre = book.genre;
    // if (book.genre === library.shelves["bookGenre"]) {
    //   library.shelves["bookGenre"].push(book);
    // }
    // console.log(library.shelves["bookGenre"]);
    // return library.shelves.book["genre"];
};

function checkoutBook(library, bookTitle, bookGenre) {
  // console.log(library.shelves[bookGenre]);
  for (var i = 0; i < library.shelves[bookGenre].length; i++) {
    if (bookTitle === library.shelves[bookGenre][i].title) {
      // console.log(library.shelves[bookGenre][i].title);
      library.shelves[bookGenre].splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${library.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
