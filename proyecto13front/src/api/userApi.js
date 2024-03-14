export const login = async (userName, pass) => {
  const data = await fetch('http://localhost:3000/api/v1/users/login', {
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
  const data = await fetch('http://localhost:3000/api/v1/users/register', {
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
  const data = await fetch('http://localhost:3000/api/v1/users/nextUser', {
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
      'http://localhost:3000/api/v1/users/pass/' + userRes.user[0]._id,
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
  const data = await fetch('http://localhost:3000/api/v1/users/byUserAndMail', {
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
