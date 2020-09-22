import itemsTemplate from '../templates/menu-items.hbs'
import menu from '../menu.json'

const markup = itemsTemplate(menu)

const menuListRef = document.querySelector('.js-menu')

menuListRef.insertAdjacentHTML('afterbegin', markup)