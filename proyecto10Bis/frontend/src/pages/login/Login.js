import { chargeSection } from '../hero/Hero'
import './Login.css'

export const TemplateLogin = (parentNode) => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  const inUser = document.createElement('input')
  const inPass = document.createElement('input')
  const btn = document.createElement('button')
  const p = document.createElement('p')
  const aLosePass = document.createElement('a')
  const aNewUser = document.createElement('a')

  h2.textContent = 'Bienvenido'
  inUser.id = 'username'
  inUser.placeholder = 'Usuario'
  inPass.id = 'password'
  inPass.type = 'password'
  inPass.placeholder = 'Contraseña'
  btn.id = 'loginbtn'
  btn.textContent = 'Login'
  p.id = 'msnLogin'
  aLosePass.textContent = '¿Perdiste tu contraseña?'
  aLosePass.href = '#'
  aNewUser.textContent = '¿No tienes cuenta? Registrate'
  aNewUser.href = '#'

  section.classList.add('flex-container', 'login')

  btn.addEventListener('click', () => Login())
  aNewUser.addEventListener('click', () => {
    chargeSection('Regitro')
  })

  aLosePass.addEventListener('click', () => {
    chargeSection('Renovar')
  })

  section.appendChild(h2)
  section.appendChild(inUser)
  section.appendChild(inPass)
  section.appendChild(btn)
  section.appendChild(p)
  section.appendChild(aLosePass)
  section.appendChild(aNewUser)
  parentNode.appendChild(section)
}

const Login = async () => {
  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value
  // Realiza una solicitud a la API para iniciar sesión

  const data = await fetch('http://localhost:3000/api/v1/users/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      userName: username,
      password: password
    })
  })

  // Convierte la respuesta a formato JSON
  const dataRes = await data.json()

  if (dataRes.user) {
    if (!dataRes.user.isBanned) {
      localStorage.setItem('user', dataRes.user.userName)
      localStorage.setItem('token', dataRes.token)
      localStorage.setItem('avatar', dataRes.user.avatar)
      localStorage.setItem('_id', dataRes.user._id)
      localStorage.setItem('rol', dataRes.user.rol)
      localStorage.setItem('isbanned', dataRes.user.isBanned)
      chargeSection('Logeado')
    } else {
      document.querySelector('#msnLogin').textContent =
        'Este usuario ha sido baneado de la pagina'
      document.querySelector('#username').value = ''
      document.querySelector('#password').value = ''
    }
  } else {
    console.log(JSON.stringify(dataRes))
    document.querySelector('#msnLogin').textContent = JSON.stringify(dataRes)
    document.querySelector('#username').value = ''
    document.querySelector('#password').value = ''
  }
}

export const logout = () => {
  if (localStorage.getItem('isbanned') === 'false') {
    const div = document.querySelector('.profile')
    div.classList.toggle('profile-show')
  }
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('avatar')
  localStorage.removeItem('_id')
  localStorage.removeItem('rol')
  localStorage.removeItem('isbanned')
}

export const verifyBanned = () => {
  fetch('http://localhost:3000/api/v1/users/' + localStorage.getItem('_id'), {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  })
    .then((res) => res.json())
    .then((user) => {
      localStorage.setItem('isbanned', user.isBanned)
    })
}
