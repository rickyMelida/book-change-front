const contactIem = document.querySelector('#contacts-item');

document.addEventListener('DOMContentLoaded',()=>{
    removeAllAssetsExcept(contactIem);

});


function removeAllAssetsExcept(item) {
    const homeItem = document.querySelector('#home-item');
    const contactIem = document.querySelector('#contacts-item');
    const myBookItem = document.querySelector('#my-book-item');
    
    //Icons section
    const favoriteItem = document.querySelector('#favorites-item img');
    const messageItem = document.querySelector('#messages-item img');
    const profileItem = document.querySelector('#my-profile-item img');

    homeItem.classList.remove('active');
    contactIem.classList.remove('active');
    myBookItem.classList.remove('active');
    
    favoriteItem.removeAttribute('src');
    favoriteItem.setAttribute('src', '../img/wish_list.svg');

    messageItem.removeAttribute('src');
    messageItem.setAttribute('src', '../img/message.png');

    profileItem.removeAttribute('src');
    profileItem.setAttribute('src', '../img/user.png');

    item.classList.add('active');
}