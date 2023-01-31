const board = document.querySelector('#board')
const SQUARES_NUMBER = 460
const colors = [
	'#E2D1F9',
	'#317773',
	'teal',
	'#990011FF',
	'#FCF6F5FF',
	'#8AAAE5',
	'#FF69B4',
	'#00FFFF',
	'#FCEDDA',
	'#ADD8E6',
]

for(i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
  board.append(square)
}

const setColor = el => {
  el.style.background = getRandomColors()
  el.style.boxShadow = `${getRandomColors()},0 0 10px ${getRandomColors()}`
}

const removeColor = el => {
  el.style.background = '#1d1d1d'
}

const getRandomColors = () => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}








// for(i = 0; i < SQUARES_NUMBER; i++) {
//   const square = document.createElement('div')
//   square.classList.add('square')
//   square.addEventListener('mouseover', () => setColor(square))
//   square.addEventListener('mouseleave', () => removeColor(square))
//   board.append(square)
// }

// function setColor(element) {
//   element.style.background = getRandomColor()
//   element.style.boxShadow = `${getRandomColor()},0 0 10px${getRandomColor()}`
// }
// function removeColor(element) {
//   element.style.background = '#1d1d1d'
// }

// function getRandomColor() {
//   const index = Math.floor(Math.random() * colors.length)
//   return colors[index]
// }