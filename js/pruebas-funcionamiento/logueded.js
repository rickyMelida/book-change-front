var logueado = !localStorage.getItem('name') && !localStorage.getItem('username') ? true : false; 
noUser(logueado);

function noUser(logueado) {
    const myBooks = document.querySelector('#my-book-item').parentNode;
    const favoriteItem = document.querySelector('#favorites-item').parentNode;
    const profileItem = document.querySelector('#my-profile-item');
    const profileOption = document.querySelector('#profile-option');
    const messageItem = document.querySelector('#messages-item').parentNode;
    
    if(logueado){
        if(document.title == 'Change Books')
            profileItem.setAttribute('href', './login.html')
        else
        profileItem.setAttribute('href', '../login.html')

        profileItem.setAttribute('title', 'Iniciar Sesión');
        profileOption.classList.add('disabled');
        profileItem.parentElement.classList.remove('mx-1');
        myBooks.classList.add('d-none');
        favoriteItem.classList.add('d-none');
        messageItem.classList.add('d-none');
    } else{
        profileOption.classList.remove('disabled');
        
        profileItem.setAttribute('title', 'Mi Perfil');
        if(document.title != 'Mi Perfil'){
            if(document.title == 'Change Books') {
                profileOption.children[0].setAttribute('href', './views/profile.html');
            }else {
                profileOption.children[0].setAttribute('href', './profile.html');
            }
        }else {
            profileOption.children[0].setAttribute('href', '#');
        } 
        profileOption.children[1].addEventListener('click', logout)


        profileItem.parentElement.classList.remove('mx-3');
        profileItem.parentElement.classList.add('mx-1');
        myBooks.classList.remove('d-none');
        favoriteItem.classList.remove('d-none');
        messageItem.classList.remove('d-none');
    }
}


function logout() {
    localStorage.clear();
    location.reload();
}