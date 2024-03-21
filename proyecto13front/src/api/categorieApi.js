export const getCategoriesSelect = async (setCategories) => {
  const data = await fetch(`http://localhost:3000/api/v1/categories/select`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()
  setCategories(res)
}
