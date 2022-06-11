import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'
import './css/index.css'
import './scss/index.scss'

console.log(css.toSting())
console.log('Config key:', config.key)

const service = new AppService('Hello world')
service.log()