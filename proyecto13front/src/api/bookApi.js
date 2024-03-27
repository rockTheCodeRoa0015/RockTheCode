import { path } from '../constants/pathBackend'
import { getParamsCategories } from '../utils/getCategories'

export const getBookByPerosnalId = async (id) => {
  const data = await fetch(path + '/api/v1/books/getByPersonalId/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'GET'
  })

  const res = await data.json()
  return res[0]
}

export const setStock = async (id, num) => {
  const data = await fetch(path + '/api/v1/books/' + id, {
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

export const getBooksByCategorie = async (
  cat,
  setBooks,
  page,
  setLastPage,
  setTitle,
  value
) => {
  const categoire = value !== '' ? value : cat
  const infoCat = getParamsCategories(categoire)
  const data = await fetch(
    `${path}/api/v1/books/getByCategorie?categorie=${infoCat.id}&page=${page}&limit=10`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  )

  const res = await data.json()
  setLastPage(res.metadata.totalPage)
  setTitle(infoCat.title)
  setBooks(res.data)
}

export const getBooksByTitle = async (title, setBooks, page, setLastPage) => {
  const upTitle = title.toUpperCase()
  const data = await fetch(
    `${path}/api/v1/books/getByTitle?title=${upTitle}&page=${page}&limit=10`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  )

  const res = await data.json()
  setLastPage(res.metadata.totalPage)
  setBooks(res.data)
}
