import { validateEmail } from '../../utils/validateEmail'
import { Login } from '../login/Login'
import './Register.css'

export const TemplateRegister = (parentNode) => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  const form = document.createElement('form')
  const inUser = document.createElement('input')
  const inEmail = document.createElement('input')
  const inPass = document.createElement('input')
  const inPass2 = document.createElement('input')
  const btn = document.createElement('button')
  const p = document.createElement('p')

  h2.textContent = 'Registarse'
  inUser.id = 'usernameReg'
  inUser.placeholder = 'Usuario'
  inUser.required = true
  inEmail.id = 'emailReg'
  inEmail.type = 'email'
  inEmail.placeholder = 'exemple@mail.com'
  inEmail.required = true
  inPass.id = 'passwordReg'
  inPass.type = 'password'
  inPass.placeholder = 'Contraseña'
  inPass.required = true
  inPass2.id = 'passwordRegRepeat'
  inPass2.type = 'password'
  inPass2.placeholder = 'Repetir contraseña'
  inPass2.required = true
  btn.id = 'registerbtn'
  btn.textContent = 'Registrar'
  p.id = 'msnRegistro'

  section.classList.add('flex-container', 'register')
  form.classList.add('flex-container')

  btn.addEventListener('click', (e) => {
    e.preventDefault()
    Register()
  })

  section.appendChild(h2)
  form.appendChild(inUser)
  form.appendChild(inEmail)
  form.appendChild(inPass)
  form.appendChild(inPass2)
  form.appendChild(btn)
  section.appendChild(form)
  section.appendChild(p)
  parentNode.appendChild(section)
}

const Register = async () => {
  const username = document.querySelector('#usernameReg').value
  const email = document.querySelector('#emailReg').value
  const pass = document.querySelector('#passwordReg').value
  const pass2 = document.querySelector('#passwordRegRepeat').value

  if (!validateEmail(email)) {
    document.querySelector('#msnRegistro').textContent = 'El emal no es valido'
    return
  }

  if (pass === pass2) {
    const data = await fetch('http://localhost:3000/api/v1/users/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        userName: username,
        email: email,
        password: pass
      })
    })

    // Convierte la respuesta a formato JSON
    const dataRes = await data.json()

    if (dataRes.status === 201) {
      document.querySelector('#msnRegistro').textContent = dataRes.desc
      document.querySelector('#msnRegistro').style.color = 'black'
      Login('msnRegistro', 'usernameReg', 'passwordReg')
    } else {
      document.querySelector('#msnRegistro').textContent =
        'Ese nombre de usuario o email ya existe'
    }
  } else {
    document.querySelector('#msnRegistro').textContent =
      'Las contraseñas no son iguales'
  }
}
