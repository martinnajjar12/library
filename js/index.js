let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let btn = document.querySelector('#createBtn');
btn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');

  let book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);

}
