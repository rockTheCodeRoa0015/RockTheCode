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
  return res
}
