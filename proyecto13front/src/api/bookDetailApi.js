import { path } from '../constants/pathBackend'

export const getBookDetails = async (id, setBook, setCategorie) => {
  const data = await fetch(path + '/api/v1/books/' + id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()

  setBook(res)

  const dataCat = await fetch(
    path + '/api/v1/categories/personalId/' + res.categories,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }
  )

  const resCat = await dataCat.json()

  setCategorie(resCat[0])
}
