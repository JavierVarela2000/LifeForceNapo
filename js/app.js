const slider = document.getElementById('slider1');
let sliderItem = document.querySelectorAll('.itemSlider');
let sliderItemLast = sliderItem[sliderItem.length - 1];
const nav = document.querySelector('nav')


//Nav//
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('activeNav');


    } else {
        nav.classList.remove('activeNav');
    }
})


slider.insertAdjacentElement('afterbegin', sliderItemLast)
setInterval(function () {
    next();
},5000)

function next() {
    let sliderItemFirst = document.querySelectorAll('.itemSlider')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = "all 1s"
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderItemFirst);
        slider.style.marginLeft = '-100%';

    }, 1000);
}



/***Galeria*** */
const imagenes = document.querySelectorAll('.imgGaleria');
const imgBox = document.querySelector('.imgBox');
const imgFull = document.querySelector('.imgFull');
const salirGaleria = document.querySelector('.salirGaleria');
const btnR = document.querySelector('.R');
const btnL = document.querySelector('.L');
let j = 0;

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', function () {
        imgBox.style.display = 'flex';
        imgFull.style.display = 'block';
        j = i + 1;
        imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    })
}

salirGaleria.addEventListener('click', function () {
    imgBox.style.display = 'none';
})
btnR.addEventListener('click',nextImage);
btnL.addEventListener('click',prevImage)

function nextImage() {
    
    j+=1;
    if(j==17){
        j=1
    }
    imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    
    
}

function prevImage() {
    
    j-=1;
    if(j<=0){
        j=16
    }
    
    imgFull.innerHTML = `<img src="img/gallery${j}.jpg" alt="">`
    
    
    
}