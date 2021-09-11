'use strict'

const dropdown = document.querySelector('.nav__dropdown-and-btns')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', e => {
	if (dropdown.style.display != 'flex') dropdown.style.display = 'flex'
	else dropdown.style.display = 'none'
	hamburger.classList.toggle('close')
})
