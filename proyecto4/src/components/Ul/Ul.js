import './Ul.css'
import { chargeSection } from '../Hero/Hero'

export const Ul = (parentNode, arrayList, listener, clase) => {
  const ul = document.createElement('ul')
  ul.classList.add('flex-container', clase)
  let num = 0
  for (const list of arrayList) {
    const li = document.createElement('li')
    li.textContent = list
    li.classList.add(clase)
    if (listener) {
      li.addEventListener('click', (e) => {
        chargeSection(e.target.textContent)
      })
    } else {
      li.id = clase + num
    }
    ul.appendChild(li)
    num++
  }
  parentNode.appendChild(ul)
}
