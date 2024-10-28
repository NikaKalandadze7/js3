const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", yearPublished: 1937 },
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    yearPublished: 1954,
  },
];
const sortedBooks = {};
books.forEach((book) => {
  const author = book.author;
  const title = book.title;
  const yearPublished = book.yearPublished;
  if (!sortedBooks[author]) {
    sortedBooks[author] = [];
  }
  sortedBooks[author].push({ title, yearPublished });
});

console.log(sortedBooks);
