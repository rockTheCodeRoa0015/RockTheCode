import Paragraph from '../Paragraph/Paragraph'
import StyledPaginator from './Paginator.style'

const Paginator = ({ add, substract, page, limit }) => {
  return (
    <StyledPaginator>
      <button disabled={page === 1} onClick={substract}>
        Anterior
      </button>
      <Paragraph>{page}</Paragraph>
      <button disabled={page === limit} onClick={add}>
        Siguiente
      </button>
    </StyledPaginator>
  )
}

export default Paginator
