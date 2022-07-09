import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'
import './css/index.css'
import './scss/index.scss'
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    slidesPerView: 3.5,
    breakpoints: {
        1000: {
            slidesPerView: 2.9
        },
        969: {
            slidesPerView: 2.8
        },
        840: {
            slidesPerView: 2.4
        },
        750: {
            slidesPerView: 2.3
        },
        650: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 1.8
        },
        550: {
            slidesPerView: 1.6
        },
        580: {
            slidesPerView: 1.8
        },
        500: {
            slidesPerView: 1.3
        },
        400: {
            slidesPerView: 1.2
        },
        320: {
            slidesPerView: 1
        },
       
    }



});



const service = new AppService('Hello world')
service.log()

const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function () {
    console.log('burger.click', nav.style.display)
    
    if (nav.style.display === 'block') {
        nav.style.display = 'none'

    } else {
        nav.style.display = 'block'

    }

})

window.addEventListener('click', function($event){

    // nav.style.display = 'none'
    // console.log($event.path)
    var clickOnBurger = false
    $event.path.forEach(function(item) {
        // console.log(item.id)
        if (item.id === 'burger' ) {
            clickOnBurger = true
        }
    })
    // console.log(clickOnBurger)
    if (clickOnBurger === false) {
        nav.style.display = 'none'
    } 
    


} )

// if (!sideNav.classList.contains("open")) {
//     sideNav.classList.add("open");
//     menu.src = "images/close.PNG";
//   } else {
//     sideNav.classList.remove("block");
//     menu.src = "images/menu.PNG";
//   }

//   sideNav.onclick = function(e) {
//     e.stopPropagation()
//   }

//   document.onclick = function() {
//     sideNav.classList.remove("open");
//     menu.src = "images/menu.PNG";
//   }


