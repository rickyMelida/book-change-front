const myData = {
  recentBooks: [
    {
      id: 1,
      title: "Corazon de fuego III",
      author: "JAZMIN MARTINEZ ",
      pages: 488,
      state: "Nuevo",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro1.jpg",
      price: "25.000",
    },
    {
      id: 2,
      title: "Libro Negro de la Nueva Izquierda",
      author: "Agustin Laje - Nicolás Marquez",
      pages: 454,
      state: "Nuevo",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro2.jpg",
      price: "25.000",
    },
    {
      id: 3,
      title: "EL SINDROME DE WOODY ALLEN",
      author: "Edu Galán",
      pages: 336,
      state: "Usado",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro3.jpg",
      price: "25.000",
    },
    {
      id: 4,
      title: "TOKYO GHOUL 4",
      author: "SUI ISHIDA",
      pages: 200,
      state: "Semi Nuevo",
      by: "Cambiar",
      imgPath: "http://127.0.0.1:5500/img/books/libro4.jpg",
      price: "25.000",
    },
  ],

  outstandingBooks: [
    {
      id: 5,
      title: "DESTROZA ESTE ALBUM",
      author: "KERI SMITH",
      pages: 64,
      state: "Nuevo",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro5.jpg",
      price: "25.000",
    },
    {
      id: 6,
      title: "ESCUELA DE TRADING",
      author: "FRANCISCA SERRANO",
      pages: 272,
      state: "Usado",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro6.jpg",
      price: "25.000",
    },
    {
      id: 7,
      title: "DE ANIMALES A DIOSES",
      author: "YUVAL NOAH HARARI",
      pages: 496,
      state: "Semi Nuevo",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro7.jpg",
      price: "45.000",
    },
    {
      id: 8,
      title: "SAPIENS - DE ANIMALES A DIOSES",
      author: "YUVAL NOAH HARARI",
      pages: 493,
      state: "Semi Nuevo",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro8.jpg",
      price: "62.000",
    },
  ],

  otherBooks: [
    {
      id: 9,
      title: "ASTRONOMIA - UNA GUIA ILUSTRADA DEL UNIVERSO",
      author: "TOM JACKSON",
      pages: 160,
      state: "Nuevo",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro9.jpg",
      price: "78.000",
    },
    {
      id: 10,
      title: "COMO FUNCIONA EL CUERPO",
      author: "DAVID MACAULAY",
      pages: 336,
      state: "Usado",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro10.jpg",
      price: "25.000",
    },
    {
      id: 11,
      title: "CIUDADES DE CINE",
      author: "CLAUDIA HELLMANN",
      pages: 192,
      state: "Semi Nuevo",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro11.jpg",
      price: "25.000",
    },
    {
      id: 12,
      title: "CIENCIA PARA LOS NIÑOS",
      author: "EL ATENEO",
      pages: 304,
      state: "Semi Nuevo",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro12.jpg",
      price: "25.000",
    },
  ],

  myBooks: [
    {
      id: 13,
      title: "AEL DIARIO DE ELISEO - CABALLO DE TROYA",
      author: "J J BENITEZ",
      pages: 820,
      state: "Uado",
      by: "Permutar",
      imgPath: "http://127.0.0.1:5500/img/books/libro13.jpg",
      price: "120.000",
    },
    {
      id: 14,
      title: "LA SEÑAL",
      author: "WM. PAUL YOUNG",
      pages: 144,
      state: "Usado",
      by: "Cambiar",
      imgPath: "http://127.0.0.1:5500/img/books/libro14.jpg",
      price: "25.000",
    },
    {
      id: 15,
      title: "ANIMALES EN PAÑALES",
      author: "MARTIN MORON",
      pages: 16,
      state: "Semi Nuevo",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro15.jpg",
      price: "25.000",
    },
    {
      id: 16,
      title: "CCURSO COMPLETO DE AJEDREZ",
      author: "MIGUEL ILLESCAS",
      pages: 832,
      state: "Semi Nuevo",
      by: "Vender",
      imgPath: "http://127.0.0.1:5500/img/books/libro16.jpg",
      price: "25.000",
    },
  ],
};

const myCollection = {
  destacado: "outstandingBooks",
  reciente: "recentBooks",
  otro: "otherBooks",
  mios: "myBooks",
};

const outstanding = document.querySelector("#destacado");
const recent = document.querySelector("#reciente");
const other = document.querySelector("#otro");
const carouselContainer = document.querySelector("#carousel-container");
const logued =
  localStorage.getItem("name") && localStorage.getItem("username")
    ? true
    : false;

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i <= 3; i++) {
    createCardsBooks(myData.outstandingBooks[i], outstanding);
    createCardsBooks(myData.recentBooks[i], recent);
    createCardsBooks(myData.otherBooks[i], other);
    createCarouselImage(myData.recentBooks[i], carouselContainer, i);
  }
  clickAvatar();
});

const card = document.querySelector(".card img");
outstanding.addEventListener("click", getBooks);
recent.addEventListener("click", getBooks);
other.addEventListener("click", getBooks);
const me = document.querySelector("#mios");

if (document.title == "Mi Perfil") me.addEventListener("click", getBooks);

function getBooks(e) {
  console.log(e.target);
  //Si no esta logueado y hace clickc en contactar
  if (e.target.innerHTML == "Contactar" && !logued)
    window.location.href = "http://127.0.0.1:5500/login.html";
  else console.log("Aca envia el mensaje por whatsapp");
  if (e.target.innerHTML != "Contactar") {
    const arrayElements = e.path;
    const myCard = arrayElements.find((element) => element.className == "card");
    const collection = myCard.parentElement.parentElement.id;
    const data = myData[myCollection[collection]];
    const result = data.find((element) => element.id == myCard.id);

    localStorage.setItem("bookData", JSON.stringify(result));
    window.location.href = "http://127.0.0.1:5500/views/details.html";
  }
}

function clickAvatar() {
  const logued =
    localStorage.getItem("name") && localStorage.getItem("username")
      ? true
      : false;
  if (logued) {
    document.querySelectorAll(".avatar").forEach((ava) => {
      ava.addEventListener("click", (e) => {
        window.location("./login.html");
      });
    });
  } else {
    document.querySelectorAll(".avatar").forEach((ava) => {
      ava.addEventListener("click", (e) => {
        window.location.href = "./login.html";
      });
    });
  }
}

function createCardsBooks(data, container) {
  const principalCol = document.createElement("div");
  principalCol.classList.add(
    "col-10",
    "offset-2",
    "col-sm-9",
    "offset-sm-3",
    "col-md-5",
    "offset-md-1",
    "col-xl-3",
    "offset-xl-0",
    "py-3"
  );

  const card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";
  card.setAttribute("id", data.id);

  const imageCard = document.createElement("img");
  imageCard.setAttribute("src", data.imgPath);
  imageCard.setAttribute("height", "350");
  imageCard.classList.add("card-img-top");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "mb-5");
  cardTitle.style.maxHeight = "24px";
  cardTitle.innerHTML = data.title;

  const lineHorizontal = document.createElement("hr");
  lineHorizontal.classList.add("mx-2");

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");

  const stateContainer = document.createElement("div");
  stateContainer.classList.add("pb-2");

  const strongState = document.createElement("strong");
  strongState.innerHTML = "Estado: ";

  const forToContainer = document.createElement("div");
  forToContainer.classList.add("py-2");

  const strongForTo = document.createElement("strong");
  strongForTo.innerHTML = "Para: ";

  const strongPrice = document.createElement("strong");
  strongPrice.classList.add("text-success", "d-block");
  //strongPrice.innerHTML = data.price;

  const buttonContact = document.createElement("button");
  buttonContact.setAttribute("type", "button");
  buttonContact.classList.add(
    "btn",
    "btn-primary",
    "btn-lg",
    "btn-block",
    "w-100"
  );
  buttonContact.innerHTML = "Contactar";

  const sectionDetail = document.createElement("section");
  sectionDetail.classList.add("mt-4");

  const avatarImage = document.createElement("img");
  avatarImage.setAttribute("src", "../img/avatar.svg");
  avatarImage.setAttribute("width", "10");
  avatarImage.setAttribute("alt", "Avatar");
  avatarImage.classList.add("avatar");

  const userCite = document.createElement("cite");
  userCite.classList.add("text-primary", "pt-2", "d-block", "w-50");
  userCite.innerHTML = "Johan Doe";

  const bookmarkContainer = document.createElement("span");
  bookmarkContainer.classList.add("text-dark", "float-end", "pt-2");
  bookmarkContainer.setAttribute("id", "bookmarkContainer");

  const imgBookmark = document.createElement("img");
  imgBookmark.setAttribute("src", "../img/bookmark.png");
  imgBookmark.setAttribute("width", "35");
  imgBookmark.setAttribute("title", "Agregar como favorito");

  container.appendChild(principalCol);

  principalCol.appendChild(card);
  card.appendChild(imageCard);
  card.appendChild(cardBody);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(lineHorizontal);
  cardBody.appendChild(cardText);
  cardBody.appendChild(buttonContact);
  cardBody.appendChild(sectionDetail);

  cardText.appendChild(stateContainer);
  cardText.appendChild(forToContainer);
  cardText.appendChild(strongPrice);

  stateContainer.appendChild(strongState);
  stateContainer.append(data.state);
  forToContainer.appendChild(strongForTo);
  forToContainer.append(data.by);

  sectionDetail.appendChild(avatarImage);
  sectionDetail.appendChild(userCite);
  sectionDetail.appendChild(bookmarkContainer);

  bookmarkContainer.appendChild(imgBookmark);
}

function createCarouselImage(data, container, index) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  if (index == 1) {
    carouselItem.classList.add("active");
  } else {
    carouselItem.classList.remove("active");
  }

  const imgCarousel = document.createElement("img");
  imgCarousel.setAttribute("src", data.imgPath);
  imgCarousel.classList.add("d-block", "w-100");

  carouselItem.appendChild(imgCarousel);
  container.appendChild(carouselItem);
}
