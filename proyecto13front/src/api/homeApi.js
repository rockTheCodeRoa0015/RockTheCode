export const getTopSales = async (setTopBooks) => {
  const data = await fetch('http://localhost:3000/api/v1/books/getTopSales', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()

  setTopBooks(res)
}

export const getLastAdd = async (setLastAddBooks) => {
  const data = await fetch('http://localhost:3000/api/v1/books/getLastAdd', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()

  setLastAddBooks(res)
}
