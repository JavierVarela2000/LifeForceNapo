let menu = document.querySelector('.menu')
let navlist = document.querySelector('.nav-list')
let comp = false;
menu.addEventListener('click', () => {
    navlist.style.transition = 'all .5s'
    navlist.classList.toggle('active-nav');
    
    if(comp){
        menu.innerHTML = `<img src="icons/menu.png" alt="">`
        comp = false

    }else{
        menu.innerHTML = `<img src="icons/close.png" alt="">`
        comp = true
    }
    
})


