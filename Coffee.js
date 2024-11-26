/*Header Secetion*/ 

let navbar = document.querySelector('.navbar');

document.querySelector('#Menu').onclick = () =>
{
    navbar.classList.toggle('active');
    cartItems.classList.remove('active');
    search.classList.remove('active');
}



let cartItems = document.querySelector('.cart-container');

document.querySelector('#cart').onclick = () =>
{
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}



let search = document.querySelector('.search-bar');

document.querySelector('#search').onclick = () =>
{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}



window.onscroll = () =>
{
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
    search.classList.remove('active');
}


/*Home Secetion*/ 