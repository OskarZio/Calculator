const options = document.querySelectorAll('.calc__option')
const resetBtn = document.querySelector('.calc__reset-btn')
const equalBtn = document.querySelector('.calc__equal-btn')
const score = document.querySelector('.calc__score')
const buttons = document.getElementsByClassName('calc__button')
const arr = [...buttons]

let str = '0'

arr.forEach((element, index) => {
	element.addEventListener('click', () => {
		element.style.opacity = '1'

		if (index == 0) {
			//
		} else if (index == 1) {
			//
		} else {
			//
		}
		arr
			.filter(function (item) {
				return item != element
			})
			.forEach(item => {
				item.style.opacity = '0'
			})
	})
})

const addOption = e => {
	if (
		e.target.textContent === 'x' ||
		e.target.textContent === '+' ||
		e.target.textContent === '-' ||
		e.target.textContent === '/'
	) {
		if (str[0] === '-' && str.length === 1) {
			console.error('insert value')
		} else if (
			str[str.length - 2] === 'x' ||
			str[str.length - 2] === '+' ||
			str[str.length - 2] === '-' ||
			str[str.length - 2] === '/'
		) {
			if (str.length === 2) {
				str += ` ${e.target.textContent} `
			} else {
				console.error('insert value')
			}
		} else if (e.target.textContent === '-') {
			if (str === '') {
				str += e.target.textContent
			} else {
				str += ` ${e.target.textContent} `
			}
		} else if (str.length === 0) {
			str = '0'
		} else {
			str += ` ${e.target.textContent} `
		}
	} else if (e.target.textContent === 'del') {
		if (typeof str === 'number') {
			str = ''
		} else if (
			str[str.length - 2] === 'x' ||
			str[str.length - 2] === '+' ||
			str[str.length - 2] === '-' ||
			str[str.length - 2] === '/'
		) {
			str = str.replace(/\s+$/, '').slice(0, -2)
		} else {
			str = str.replace(/\s+$/, '').slice(0, -1)
		}
	} else {
		if (str[0] === '0' && e.target.textContent === '0' && str.length === 1) {
			console.error('insert value')
		} else if (str[0] === '0' && str.length === 1) {
			str = e.target.textContent
		} else if (str[str.length - 1] === '0'){
			str.replace('0', e.target.textContent)
		}
		else {
			str += e.target.textContent
		}
	}
	score.textContent = str
}

const reset = () => {
	score.textContent = 0
	str = '0'
	console.clear()
}

function looseJsonParse(obj) {
	return Function(`"use strict";return ${obj}`)()
}

const sum = () => {
	str = str.replaceAll('x', '*')
	str = looseJsonParse(looseJsonParse(`${str}`))
	score.textContent = str
}
equalBtn.addEventListener('click', sum)
resetBtn.addEventListener('click', reset)
options.forEach(option => option.addEventListener('click', addOption))
