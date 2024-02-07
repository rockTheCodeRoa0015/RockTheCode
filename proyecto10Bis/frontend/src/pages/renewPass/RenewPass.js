import { chargeSection } from '../hero/Hero'
import './RenewPass.css'

export const TemplateRenewPass = (parentNode) => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  const form = document.createElement('form')
  const inUser = document.createElement('input')
  const inEmail = document.createElement('input')
  const inPass = document.createElement('input')
  const inPass2 = document.createElement('input')
  const btn = document.createElement('button')
  const p = document.createElement('p')

  h2.textContent = 'Renovar contraseña'
  inUser.id = 'usernameRenew'
  inUser.placeholder = 'Usuario'
  inUser.required = true
  inEmail.id = 'emailRenew'
  inEmail.type = 'email'
  inEmail.placeholder = 'exemple@mail.com'
  inEmail.required = true
  inPass.id = 'passwordRenew'
  inPass.type = 'password'
  inPass.placeholder = 'Contraseña'
  inPass.required = true
  inPass2.id = 'passwordRenewRepeat'
  inPass2.type = 'password'
  inPass2.placeholder = 'Repetir contraseña'
  inPass2.required = true
  btn.id = 'renewbtn'
  btn.textContent = 'Modificar'
  p.id = 'msnRenew'

  section.classList.add('flex-container', 'renew')
  form.classList.add('flex-container')

  btn.addEventListener('click', () => renovar())

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

const renovar = async () => {
  const username = document.querySelector('#usernameRenew').value
  const email = document.querySelector('#emailRenew').value
  const pass = document.querySelector('#passwordRenew').value
  const pass2 = document.querySelector('#passwordRenewRepeat').value

  if (!validateEmail(email)) {
    document.querySelector('#msnRenew').textContent = 'El emal no es valido'
    return
  }

  if (pass === pass2) {
    const data = await fetch(
      'http://localhost:3000/api/v1/users/byNameAndMail',
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          userName: username,
          email: email
        })
      }
    )

    // Convierte la respuesta a formato JSON
    const dataRes = await data.json()
    console.log(dataRes.user[0]._id)

    if (dataRes.status === 200) {
      const dataUp = await fetch(
        'http://localhost:3000/api/v1/users/pass/' + dataRes.user[0]._id,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({
            password: pass
          })
        }
      )

      // Convierte la respuesta a formato JSON
      const dataResUp = await dataUp.json()
      if (dataResUp.status === 200) {
        document.querySelector('#msnRenew').textContent = 'Password cambiado'
        document.querySelector('#msnRenew').style.color = 'black'
        setTimeout(() => {
          chargeSection('Login')
        }, 2000)
      } else {
        document.querySelector('#msnRenew').textContent =
          'Fallo al cambiar la password, vuelva a intentar'
      }
    } else {
      document.querySelector('#msnRenew').textContent =
        'Ese nombre de usuario o email no existe'
    }
  } else {
    document.querySelector('#msnRenew').textContent =
      'Las contraseñas no son iguales'
  }
}

function validateEmail(email) {
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  // Using test we can check if the text match the pattern
  if (validEmail.test(email)) {
    return true
  } else {
    return false
  }
}
