import { path } from '../constants/pathBackend'
import { getCartBooks } from './cartApi'

export const login = async (userName, pass) => {
  const data = await fetch(path + '/api/v1/users/login', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      userName: userName,
      password: pass
    })
  })

  const res = await data.json()
  return res
}

export const registerUser = async (userName, email, pass) => {
  const nextUserRes = await nextUser()
  const data = await fetch(path + '/api/v1/users/register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      id: nextUserRes.next,
      userName: userName,
      email: email,
      password: pass
    })
  })

  const res = await data.json()
  return res
}

const nextUser = async () => {
  const data = await fetch(path + '/api/v1/users/nextUser', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()
  return res
}

export const renewPass = async (userName, email, pass) => {
  const userRes = await getByUserNameAndMail(userName, email)
  if (userRes.status === 200) {
    const data = await fetch(
      path + '/api/v1/users/pass/' + userRes.user[0]._id,
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

    const res = await data.json()
    return res
  } else {
    return userRes.msg
  }
}

const getByUserNameAndMail = async (userName, email) => {
  const data = await fetch(path + '/api/v1/users/byUserAndMail', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      userName: userName,
      email: email
    })
  })

  const res = await data.json()
  return res
}

export const getUserByUserId = async (id) => {
  const data = await fetch(path + '/api/v1/users/byUserId/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'GET'
  })

  const res = await data.json()
  return res[0]
}

export const getUserDetailsPurchase = async (id) => {
  const resUser = await getUserByUserId(id)
  const resCart = await getCartBooks(id)
  let sumPrice = 0
  for (const cart of resCart) {
    sumPrice += cart.price
  }
  const obPurchase = {
    user: resUser,
    price: sumPrice
  }
  return obPurchase
}

export const putUserData = async (id, values) => {
  const data = await fetch(path + '/api/v1/users/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT',
    body: JSON.stringify({
      name: values.name,
      lastName1: values.lastname,
      lastName2: values.lastname2,
      telephone: values.telephone,
      street: values.street,
      number: values.number,
      floor: values.floor,
      door: values.door,
      postalCode: values.postalCode,
      city: values.city,
      province: values.province
    })
  })

  const res = await data.json()
  return res
}

export const ModifyUserData = async (id, values) => {
  const resUser = await getUserByUserId(id)
  const restPutUser = await putUserData(resUser._id, values)
  if (!restPutUser.mensaje) {
    return { msg: 'Error al Modificar los datos del usuario', status: 400 }
  }
  return { msg: 'Datos mofificados', status: 200 }
}
