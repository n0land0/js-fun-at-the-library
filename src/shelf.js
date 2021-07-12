function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      shelf.splice(i, 1);
    }
  }
  return shelf;
}

function listTitles(shelf) {
  // var titles = [];
  // for (var i = 0; i < shelf.length; i++) {
  //   titles.push(shelf[i].title);
  // }
  // return(titles.join(", "));
  var titles = `${shelf[0].title}`;
  for (var i = 1; i < shelf.length; i++) {
    titles = `${titles}, ${shelf[i].title}`;
  }
  return titles;
}

function searchShelf(shelf, bookTitle) {
  // var isOnShelf = false;
  // for (var i = 0; i < shelf.length; i++) {
  //   if (shelf[i].title === bookTitle) {
  //     isOnShelf = true;
  //   }
  // }
  // return isOnShelf;
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
