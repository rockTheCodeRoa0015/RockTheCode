export const sumPrice = (books, setSumTotal) => {
  let sum = 0
  for (const book of books) {
    sum += book.price * book.quantity
  }
  setSumTotal(sum.toFixed(2))
}
