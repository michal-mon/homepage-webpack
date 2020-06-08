import '../scss/main.scss';
import moment from 'moment';

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

const godzina = moment().startOf('day').fromNow();
console.log(`Dzień zaczął się: ${godzina}`);

function helloWorld(name, age, className){
console.log(`Cześć, jestem ${name} i mam ${age} lat, a ta funkcja została wywołana z obiektu klasy ${className}`);
}

helloWorld(user.nameUser, user.ageUser, user.className);

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener('click', () =>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});


let isDark = false;
const darkButton = document.querySelector(".dark-mode");
darkButton.addEventListener('click', ()=>{
    
    if (isDark == false){
        isDark = true;
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-color', 'black');
    }
    else{
        isDark = false;
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-color', '-webkit-linear-gradient(to right, #D7DDE8, #757F9A)');
    }

});

