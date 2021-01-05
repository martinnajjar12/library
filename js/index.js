let myLibrary = [];
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('#readStatus');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const btn = document.querySelector('#createBtn');
btn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  if (title.value == '' || author.value == '' || pages.value == '') {
    restoreLocal();
  } else {
    let book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
    saveLocal();
    const bookCard = new Card(book);
    newBook(bookCard);
    cleanInputs();
  }
}

function cleanInputs() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
}

function newBook(bookCard) {
  resetList();
  for (let book of myLibrary) {
    bookCard.createCard(book);
  }
}

function resetList() {
  row.innerHTML = '';
}

function deleteBook(e) {
  const bookIndex = myLibrary.indexOf(e.target);
  myLibrary.splice(bookIndex, 1);
  saveLocal();
  e.target.offsetParent.parentElement.remove();
}

const row = document.querySelector('.row');

function Card(book) {
  this.book = book;
}

Card.prototype.createCard = (book) => {
  const column = document.createElement('div');
  column.className = 'mb-3 col-6';

  const card = document.createElement('div');
  card.className = 'shadow card';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = book.title;

  const subTitle = document.createElement('h6');
  subTitle.className = 'card-subtitle mb-2 text-muted'
  subTitle.textContent = book.author;

  const cardPages = document.createElement('p');
  cardPages.classList.add('card-text');
  cardPages.textContent = `${book.pages} pages`;

  const bookRead = document.createElement('button');
  bookRead.className = 'btn btn-secondary mr-3';
  bookRead.addEventListener('click', changeStatus);
  if(book.read) {
    bookRead.textContent = 'Read';
  } else {
    bookRead.textContent = 'Not Read';
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.className = 'btn btn-danger';
  deleteBtn.textContent = 'Delete Book';
  deleteBtn.addEventListener('click', deleteBook);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(subTitle);
  cardBody.appendChild(cardPages);
  cardBody.appendChild(bookRead);
  cardBody.appendChild(deleteBtn);
  card.appendChild(cardBody);
  column.appendChild(card);
  row.appendChild(column);
}

function changeStatus(e) {
  if(e.target.textContent == 'Read') {
    e.target.textContent = 'Not Read';
  } else {
    e.target.textContent = 'Read';
  }
}

function saveLocal() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function restoreLocal() {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  if (myLibrary === null) myLibrary = [];
  const bookCard = new Card;
  newBook(bookCard);
}

restoreLocal();
