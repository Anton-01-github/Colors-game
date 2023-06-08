const board = document.querySelector('#board')
const colors = ['#e200b2' , '#00e9aa', '#c69a1a','#fefrfq', '#ff2e8c', '#ffdbad','#2bdf80', '#fd6839', '#2436b3', '#95cafd']
const SQUAREAS_NUMBER = 700

for (let i = 0; i < SQUAREAS_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1f1f1f'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}