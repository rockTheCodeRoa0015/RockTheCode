import { getCurrentDate } from '../utils/getDate'

export const getNextSale = async () => {
  const data = await fetch('http://localhost:3000/api/v1/sales/getNextSale', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'GET'
  })

  const res = await data.json()
  return res
}

export const postSale = async (id, cart, pay) => {
  const currentDate = getCurrentDate()
  const data = await fetch('http://localhost:3000/api/v1/sales', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'POST',
    body: JSON.stringify({
      id: id,
      user: cart.user,
      book: cart.book,
      price: cart.price,
      numCopies: cart.numCopies,
      date: currentDate,
      state: 'comprado',
      pay: pay
    })
  })

  const res = await data.json()
  return res
}
