import '../scss/main.scss';

/*const name = "Michał Moń";
const age = 19;
console.log(`Nazywam się ${name} i mam ${age} lat`);*/

//const paragraph = document.querySelector('.articles--js');
//paragraph.innerHTML = 'Mistrz Javascript v2';
//console.log(paragraph);

const user = {
    className: "User",
    nameUser: "Michał",
    ageUser: 19,
}

function helloWorld(name, age, className){
console.log(`Cześć, jestem ${name} i mam ${age} lat, a ta funkcja została wywołana z obiektu klasy ${className}`);
}

helloWorld(user.nameUser, user.ageUser, user.className);

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener('click', () =>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});

