//1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div')
document.body.appendChild(div)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div1 = document.createElement('div')
const p1 = document.createElement('p')
div1.appendChild(p1)
document.body.appendChild(div1)

/*1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.*/
const div2 = document.createElement('div')
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p')
  div2.appendChild(p)
}
document.body.appendChild(div2)

/*1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.*/
const p2 = document.createElement('p')
p2.textContent = 'Soy dinámico!'
document.body.appendChild(p2)
/*1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'
/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}
document.body.appendChild(ul)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeNodes = document.querySelectorAll('.fn-remove-me')
for (const node of removeNodes) {
  document.body.removeChild(node)
}

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/
const p3 = document.createElement('p')
const div3 = document.querySelector('div')
p3.textContent = 'Voy en medio!'
div3.insertAdjacentElement('afterbegin', p3)

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here*/
const divs = document.querySelectorAll('div.fn-insert-here')

for (const div of divs) {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
}
