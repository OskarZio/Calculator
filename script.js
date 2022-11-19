const options = document.querySelectorAll('.calc__option')
const del = document.querySelector('.calc__option--del')
const resetBtn = document.querySelector('.calc__reset-btn')
const equalBtn = document.querySelector('.calc__equal-btn')
const score = document.querySelector('.calc__score')
const buttons = document.getElementsByClassName('calc__button')
const arr = [...buttons]
let root = document.documentElement
let str = '0'

arr.forEach((element, index) => {
	element.addEventListener('click', () => {
		element.style.opacity = '1'

		if (index == 0) {
			root.style.setProperty('--bg-color', 'hsl(222, 26%, 31%')
			root.style.setProperty('--text-one-color', 'hsl(0, 0%, 100%)')
			root.style.setProperty('--bg-toggle-container', 'hsl(223, 31%, 20%)')
			root.style.setProperty('--toggle-btn', 'hsl(6, 63%, 50%)')
			root.style.setProperty('--label-color', 'hsl(224, 36%, 15%)')
			root.style.setProperty('--del-reset-shadow-color', 'hsl(224, 28%, 35%)')
			root.style.setProperty('--del-reset-bg-color', 'hsl(225, 21%, 49%)')
			root.style.setProperty('--text-two-color', ' hsl(221, 14%, 31%)')
			root.style.setProperty('--bg-option', 'hsl(30, 25%, 89%)')
			root.style.setProperty('--shadow-option', ' hsl(28, 16%, 65%)')
			root.style.setProperty('--bg-equal-btn', ' hsl(6, 63%, 50%)')
			root.style.setProperty('--shadow-bg-equal-btn', 'hsl(6, 70%, 34%)')
		} else if (index == 1) {
			root.style.setProperty('--bg-color', 'hsl(0, 0%, 90%)')
			root.style.setProperty('--text-one-color', 'hsl(60, 10%, 19%)')
			root.style.setProperty('--bg-toggle-container', 'hsl(0, 5%, 81%)')
			root.style.setProperty('--toggle-btn', 'hsl(25, 98%, 40%)')
			root.style.setProperty('--label-color', 'hsl(0, 0%, 93%)')
			root.style.setProperty('--del-reset-shadow-color', 'hsl(185, 58%, 25%)')
			root.style.setProperty('--del-reset-bg-color', 'hsl(185, 42%, 37%)')
			root.style.setProperty('--text-two-color', ' hsl(60, 10%, 19%)')
			root.style.setProperty('--bg-option', 'hsl(45, 7%, 89%)')
			root.style.setProperty('--shadow-option', ' hsl(35, 11%, 61%)')
			root.style.setProperty('--bg-equal-btn', ' hsl(25, 98%, 40%)')
			root.style.setProperty('--shadow-bg-equal-btn', ' hsl(25, 99%, 27%)')
			equalBtn.style.setProperty('color', 'hsl(0, 0%, 100%)')
			resetBtn.style.setProperty('color', 'hsl(0, 0%, 100%)')
			del.style.setProperty('color', 'hsl(0, 0%, 100%)')
		} else {
			root.style.setProperty('--bg-color', 'hsl(268, 75%, 9%)')
			root.style.setProperty('--text-one-color', 'hsl(52, 100%, 62%)')
			root.style.setProperty('--bg-toggle-container', 'hsl(268, 71%, 12%)')
			root.style.setProperty('--toggle-btn', 'hsl(176, 100%, 44%)')
			root.style.setProperty('--label-color', ' hsl(268, 71%, 12%)')
			root.style.setProperty('--del-reset-shadow-color', 'hsl(285, 91%, 52%)')
			root.style.setProperty('--del-reset-bg-color', 'hsl(281, 89%, 26%)')
			root.style.setProperty('--text-two-color', 'hsl(52, 100%, 62%)')
			root.style.setProperty('--bg-option', 'hsl(268, 47%, 21%)')
			root.style.setProperty('--shadow-option', ' hsl(290, 70%, 36%)')
			root.style.setProperty('--bg-equal-btn', ' hsl(176, 100%, 44%)')
			root.style.setProperty('--shadow-bg-equal-btn', 'hsl(177, 92%, 70%)')
			equalBtn.style.setProperty('color', 'hsl(198, 20%, 13%)')
			resetBtn.style.setProperty('color', 'hsl(0, 0%, 100%)')
			del.style.setProperty('color', 'hsl(0, 0%, 100%)')
		}
		// 	--bg-color: hsl(222, 26%, 31%);
		// --text-one-color: hsl(0, 0%, 100%);
		// --bg-toggle-container: hsl(223, 31%, 20%);
		// --toggle-btn: hsl(6, 63%, 50%);
		// --label-color: hsl(224, 36%, 15%);
		// --del-reset-shadow-color: hsl(224, 28%, 35%);
		// --del-reset-bg-color: hsl(225, 21%, 49%);
		// --text-two-color: hsl(221, 14%, 31%);
		// --bg-option: hsl(30, 25%, 89%);
		// --shadow-option: hsl(28, 16%, 65%);
		// --bg-equal-btn: hsl(6, 63%, 50%);
		// --shadow-bg-equal-btn: hsl(6, 70%, 34%);
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
			str = '0'
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
		} else if (typeof str === 'number') {
			str = '0'
		} else if (str[str.length - 1] === '0') {
			str.replace('0', e.target.textContent)
		} else {
			str += e.target.textContent
		}
	}
	score.textContent = str
}

const reset = () => {
	score.textContent = '0'
	str = ''
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
