import { useState } from 'react'

const usePaginator = () => {
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  return { page, setPage, lastPage, setLastPage }
}

export default usePaginator
