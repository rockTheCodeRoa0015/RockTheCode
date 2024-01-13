import './Footer.css'

export const Footer = (parentNode) => {
  const footer = document.createElement('footer')
  const p = document.createElement('p')
  p.textContent = '© 2024 Created by Jesús Roa'
  footer.classList.add('flex-container', 'footer')
  footer.appendChild(p)
  parentNode.appendChild(footer)
}
