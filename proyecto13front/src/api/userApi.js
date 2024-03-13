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
