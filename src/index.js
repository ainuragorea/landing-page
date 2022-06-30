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
        969: {
            slidesPerView: 3
        },
        600: {
            slidesPerView: 2.5,
        }
    }



});



console.log(css.toSting())
console.log('Config key:', config.key)

const service = new AppService('Hello world')
service.log()