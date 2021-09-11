'use strict'

const dropdown = document.querySelector('.nav__dropdown-and-btns')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', e => {
	dropdown.classList.toggle('dropdown--active')
	hamburger.classList.toggle('close')
})
