export const getBookByPerosnalId = async (id) => {
  const data = await fetch(
    'http://localhost:3000/api/v1/books/getByPersonalId/' + id,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'GET'
    }
  )

  const res = await data.json()
  return res[0]
}

export const setStock = async (id, num) => {
  const data = await fetch('http://localhost:3000/api/v1/books/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT',
    body: JSON.stringify({
      stock: num
    })
  })

  const res = await data.json()
  return res
}

export const getBooksByCategorie = async (cat, setBooks) => {
  let id = ''
  if (cat === 'manga') {
    id = 9
  } else if (cat === 'infantil') {
    id = 10
  } else {
    id = 'all'
  }
  const data = await fetch(
    'http://localhost:3000/api/v1/books/getByCategorie/' + id,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  )

  const res = await data.json()
  setBooks(res)
}
