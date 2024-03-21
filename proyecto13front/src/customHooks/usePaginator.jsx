import { useState } from 'react'

const usePaginator = () => {
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  const sumPage = () => {
    setPage(page + 1)
  }

  const substractPage = () => {
    setPage(page - 1)
  }

  const resetPage = () => {
    setPage(1)
  }

  return { page, lastPage, setLastPage, sumPage, substractPage, resetPage }
}

export default usePaginator
