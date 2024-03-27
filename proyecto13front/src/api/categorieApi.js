import { path } from '../constants/pathBackend'

export const getCategoriesSelect = async (setCategories) => {
  const data = await fetch(path + '/api/v1/categories/select', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const res = await data.json()
  setCategories(res)
}
