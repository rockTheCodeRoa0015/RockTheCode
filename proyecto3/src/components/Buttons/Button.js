import './Button.css'

export const Button = (parentNode, text, size, url) => {
  const button = document.createElement('button')
  button.textContent = text
  button.classList.add('button', size)
  parentNode.appendChild(button)
  button.addEventListener('click', () => {
    downloadImage(url)
  })
}

const downloadImage = (url) => {
  const a = document.createElement('a')
  a.download = true
  a.target = '_blank'
  a.href = url
  a.click()
}
