export const getBookDetails = async (id, setBook, setCategorie) => {
  const data = await fetch('http://localhost:3000/api/v1/books/' + id, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()

  setBook(res)

  const dataCat = await fetch(
    'http://localhost:3000/api/v1/categories/personalId/' + res.categories,
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
