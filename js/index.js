const myLibrary = [];
const btn = document.querySelector('#createBtn');
const row = document.querySelector('.row');

function createCard(book) {
  const column = document.createElement('div');
  column.classList.add('col-6');

  const card = document.createElement('div');
  card.classList.add('card');

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
  cardPages.textContent = book.pages;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(subTitle);
  cardBody.appendChild(cardPages);
  card.appendChild(cardBody);
  column.appendChild(card);
  row.appendChild(column);
}

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');

  let book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  createCard(book);
}

btn.addEventListener("click", addBookToLibrary);
