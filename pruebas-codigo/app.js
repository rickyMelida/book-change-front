const myData = {
    recentBooks : [
        {
            id:1,
            title: "Corazon de fuego III",
            author: "JAZMIN MARTINEZ ",
            pages: 488,
            state: "Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro1.jpg',
            price: '25.000'
        },
        {
            id:2,
            title: "Libro Negro de la Nueva Izquierda",
            author: "Agustin Laje - Nicolás Marquez",
            pages: 454,
            state: "Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro2.jpg',
            price: '25.000'
        },
        {
            id:3,
            title: "EL SINDROME DE WOODY ALLEN",
            author: "Edu Galán",
            pages: 336,
            state: "Usado",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro3.jpg',
            price: '25.000'
        },
        {
            id:4,
            title: "TOKYO GHOUL 4",
            author: "SUI ISHIDA",
            pages: 200,
            state: "Semi Nuevo",
            by: "Cambio",
            imgPath: 'http://127.0.0.1:5500/img/books/libro4.jpg',
            price: '25.000'
        },
    ],

    outstandingBooks: [
        {
            id:5,
            title: "DESTROZA ESTE ALBUM",
            author: "KERI SMITH",
            pages: 64,
            state: "Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro5.jpg',
            price: '25.000'
        },
        {
            id:6,
            title: "ESCUELA DE TRADING",
            author: "FRANCISCA SERRANO",
            pages: 272,
            state: "Usado",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro6.jpg',
            price: '25.000'
        },
        {
            id:7,
            title: "DE ANIMALES A DIOSES",
            author: "YUVAL NOAH HARARI",
            pages: 496,
            state: "Semi Nuevo",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro7.jpg',
            price: '45.000'
        },
        {
            id:8,
            title: "SAPIENS - DE ANIMALES A DIOSES",
            author: "YUVAL NOAH HARARI",
            pages: 493,
            state: "Semi Nuevo",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro8.jpg',
            price: '62.000'
        },
    ],

    otherBooks: [
        {
            id:9,
            title: "ASTRONOMIA - UNA GUIA ILUSTRADA DEL UNIVERSO",
            author: "TOM JACKSON",
            pages: 160,
            state: "Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro9.jpg',
            price: '78.000'
        },
        {
            id:10,
            title: "COMO FUNCIONA EL CUERPO",
            author: "DAVID MACAULAY",
            pages: 336,
            state: "Usado",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro10.jpg',
            price: '25.000'
        },
        {
            id:11,
            title: "CIUDADES DE CINE",
            author: "CLAUDIA HELLMANN",
            pages: 192,
            state: "Semi Nuevo",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro11.jpg',
            price: '25.000'
        },
        {
            id:12,
            title: "CIENCIA PARA LOS NIÑOS",
            author: "EL ATENEO",
            pages: 304,
            state: "Semi Nuevo",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro12.jpg',
            price: '25.000'
        },
    ],

    myBooks: [
        {
            id:13,
            title: "AEL DIARIO DE ELISEO - CABALLO DE TROYA",
            author: "J J BENITEZ",
            pages: 820,
            state: "Uado",
            by: "Permuta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro13.jpg',
            price: '120.000'
        },
        {
            id:14,
            title: "LA SEÑAL",
            author: "WM. PAUL YOUNG",
            pages: 144,
            state: "Usado",
            by: "Cambio",
            imgPath: 'http://127.0.0.1:5500/img/books/libro14.jpg',
            price: '25.000'
        },
        {
            id:15, 
            title: "ANIMALES EN PAÑALES",
            author: "MARTIN MORON",
            pages: 16,
            state: "Semi Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro15.jpg',
            price: '25.000'
        },
        {
            id:16,
            title: "CCURSO COMPLETO DE AJEDREZ",
            author: "MIGUEL ILLESCAS",
            pages: 832,
            state: "Semi Nuevo",
            by: "En venta",
            imgPath: 'http://127.0.0.1:5500/img/books/libro16.jpg',
            price: '25.000'
        },
    ]
};

const divMain = document.querySelector('.container .row');
createCardsBooks(myData.outstandingBooks[0], divMain);

function createCardsBooks(data, container) {

    const principalCol = document.createElement('div');
    principalCol.classList.add('col-md-4');

    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '20rem';

    const imageCard = document.createElement('img');
    imageCard.setAttribute('src', '../img/books/libro11.jpg');
    imageCard.setAttribute('width', '100');
    imageCard.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = 'Ciudades de Cines - Claudia Hellman';

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');

    const stateContainer = document.createElement('div');
    stateContainer.classList.add('pb-2');
    
    const strongState = document.createElement('strong');
    strongState.innerHTML = "Estado: ";

    const forToContainer = document.createElement('div');
    forToContainer.classList.add('py-2');

    const strongForTo = document.createElement('strong');
    strongForTo.innerHTML = 'Para: ';

    const strongPrice = document.createElement('strong');
    strongPrice.classList.add('text-success', 'd-block');
    strongPrice.innerHTML = '$235';

    const buttonContact = document.createElement('button');
    buttonContact.setAttribute('type', 'button');
    buttonContact.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block', 'w-100');
    buttonContact.innerHTML = 'Contactar';

    const sectionDetail = document.createElement('section');
    sectionDetail.classList.add('mt-4');

    const avatarImage = document.createElement('img');
    avatarImage.setAttribute('src', '../img/avatar.svg');
    avatarImage.setAttribute('width', '10');
    avatarImage.setAttribute('alt', 'Avatar');
    avatarImage.classList.add('avatar');

    const userCite = document.createElement('cite');
    userCite.classList.add('text-primary', 'pt-3');
    userCite.innerHTML = 'Johan Doe';

    const bookmarkContainer = document.createElement('span');
    bookmarkContainer.classList.add('text-dark', 'float-end', 'pt-2');

    const imgBookmark = document.createElement('img');
    imgBookmark.setAttribute('src', '../img/bookmark.png');
    imgBookmark.setAttribute('width', '35');
    imgBookmark.setAttribute('title', 'Agregar como favorito');
    
    
    container.appendChild(principalCol);

    principalCol.appendChild(card);
    card.appendChild(imageCard);
    card.appendChild(cardBody);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(buttonContact);
    cardBody.appendChild(sectionDetail);

    cardText.appendChild(stateContainer);
    cardText.appendChild(forToContainer);
    cardText.appendChild(strongPrice);

    stateContainer.appendChild(strongState);
    forToContainer.appendChild(strongForTo);

    sectionDetail.appendChild(avatarImage);
    sectionDetail.appendChild(userCite);
    sectionDetail.appendChild(bookmarkContainer);

    bookmarkContainer.appendChild(imgBookmark);
    
}