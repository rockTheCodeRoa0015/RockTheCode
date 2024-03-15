import { getBookByPerosnalId } from './bookApi'

const postCart = async (book, num) => {
  const data = await fetch('http://localhost:3000/api/v1/carts', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'POST',
    body: JSON.stringify({
      user: localStorage.getItem('id'),
      book: book.id,
      numCopies: num,
      price: book.price
    })
  })

  const res = await data.json()
  return res
}

const putCart = async (num, id) => {
  const data = await fetch('http://localhost:3000/api/v1/carts/' + id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT',
    body: JSON.stringify({
      numCopies: num
    })
  })

  const res = await data.json()
  return res
}

const getCartByUserAndBook = async (book) => {
  const data = await fetch(
    'http://localhost:3000/api/v1/carts/getCartUserAndBook',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      method: 'POST',
      body: JSON.stringify({
        user: localStorage.getItem('id'),
        book: book.id
      })
    }
  )

  const res = await data.json()
  return res
}

export const addBooksCart = async (book, num) => {
  const resGetCart = await getCartByUserAndBook(book)

  if (resGetCart.length !== 0) {
    const resPut = await putCart(
      num + parseInt(resGetCart[0].numCopies),
      resGetCart[0]._id
    )
    return resPut
  } else {
    const resPost = await postCart(book, num)
    return resPost
  }
}

const getCartBooks = async (id) => {
  const data = await fetch(
    'http://localhost:3000/api/v1/carts/getByUser/' + id,
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

export const getCartByPersonalId = async (id) => {
  const res = await getCartBooks(id)
  let num = 0
  if (res.length !== 0) {
    for (const cart of res) {
      num += parseInt(cart.numCopies)
    }
  }
  return num
}

export const getDetailCart = async (id) => {
  const arrBooks = []
  const res = await getCartBooks(id)
  if (res.length !== 0) {
    for (const cart of res) {
      const bookRes = await getBookByPerosnalId(cart.book)
      for (const book of bookRes) {
        const obBook = {
          id: book.id,
          title: book.title,
          cover: book.cover,
          price: book.price,
          quantity: cart.numCopies
        }
        arrBooks.push(obBook)
      }
    }
  }

  return arrBooks
}
