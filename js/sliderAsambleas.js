const slider2 = document.querySelector(".slider2");
let slider2item = document.querySelectorAll(".itemSlider2");
let slider2itemLast = slider2item[slider2item.length - 1];

const rightbt = document.querySelector(".rightAsambleas")
const leftb = document.querySelector(".leftAsambleas");

slider2.insertAdjacentElement('afterbegin', slider2itemLast)

rightbt.addEventListener('click', () => {
    Next();
})
leftb.addEventListener('click', () => {
    Prev();
})
let y = window.matchMedia("(max-width: 700px)");


function Next() {
    let slider2itemFirst = document.querySelectorAll(".itemSlider2")[0];
    if (window.innerWidth < 700) {
        slider2.style.marginLeft = '-200%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-100%"
        }, 500);
    } else if (window.innerWidth >= 700 && window.innerWidth < 1024) {
        slider2.style.marginLeft = '-100%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-50%"
        }, 500);
    } else if(window.innerWidth >= 1024 && window.innerWidth < 1280){
        slider2.style.marginLeft = '-66.66%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-33.33%"
        }, 500);
    } else{
        slider2.style.marginLeft = '-50%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-25%"
        }, 500);
    }


}

function Prev() {
    let slider2item = document.querySelectorAll(".itemSlider2");
    let slider2itemLast = slider2item[slider2item.length - 1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(() => {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("afterbegin", slider2itemLast);
        if (window.innerWidth < 700) {
            slider2.style.marginLeft = "-100%"

        } else if (window.innerWidth >= 700 && window.innerWidth < 1024) {
            
            slider2.style.marginLeft = "-50%"
        } else if(window.innerWidth >= 1024 && window.innerWidth < 1280){
            slider2.style.marginLeft = "-33.33%"
        } else{
            slider2.style.marginLeft = '-25%'
        }


    }, 500);
}


/*

if (y.matches) {
    sld('-200%', '-100%', slider, '.slider-item');
    console.log('menos de 700');


} else {
    let x = window.matchMedia("(max-width: 990px)");
    if (x.matches) { // If media query matches
        console.log('menos de 900');
        sld('-66.6%', '-33.3%', slider, '.slider-item');


    } else {
        console.log('mas de 911')
        sld('-50%', '-25%', slider, '.slider-item')

    }
}

*/

/*function Next() {
    let slider2itemFirst = document.querySelectorAll(".itemSlider2")[0];
    if (y.matches) {
        slider2.style.marginLeft = '-200%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-100%"
        }, 500);


    } else {
        y = window.matchMedia("(max-width: 1024px)");
    }
    if (y.matches) { // If media query matches
        slider2.style.marginLeft = '-100%'
        slider2.style.transition = 'all 0.5s'
        setTimeout(() => {
            slider2.style.transition = 'none'
            slider2.insertAdjacentElement("beforeend", slider2itemFirst);
            slider2.style.marginLeft = "-50%"
        }, 500);
    } 


}

function Prev() {
    let slider2item = document.querySelectorAll(".itemSlider2");
    let slider2itemLast = slider2item[slider2item.length - 1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(() => {
        slider2.style.transition = "none";
        slider2.insertAdjacentElement("afterbegin", slider2itemLast);
        if (y.matches) {
            slider2.style.marginLeft = "-100%"

        } else {
            y = window.matchMedia("(max-width: 1024px)");
        }
        if (y.matches) { // If media query matches
            slider2.style.marginLeft = "-50%"

        } 



    }, 500);
}*/
