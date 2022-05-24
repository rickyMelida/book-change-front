const bookData = JSON.parse(localStorage.getItem('bookData'));

const bookImage = document.querySelectorAll('.book-image');
const bookTitle = document.querySelector('.book-title');
const booAuthor = document.querySelectorAll('.book-author');
const bookPages = document.querySelector('.book-pages');

for(let i=0;i<booAuthor.length;i++)
    booAuthor[i].innerHTML = bookData.author;

for(let i=0;i<bookImage.length;i++)
    bookImage[i].setAttribute('src', bookData.imgPath);

bookTitle.innerHTML = bookData.title;
bookPages.innerHTML = bookData.pages;

const btnCancelar = document.querySelector('.btn-danger');

btnCancelar.addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/index.html';
})

