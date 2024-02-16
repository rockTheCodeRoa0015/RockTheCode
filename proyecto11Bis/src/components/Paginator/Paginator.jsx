import './Paginator.css'

const Paginator = ({ setFunc, page, limit }) => {
  return (
    <div className='flex-container'>
      <button disabled={page === 1} onClick={() => setFunc(page - 1)}>
        Anterior
      </button>
      <button disabled={page === limit} onClick={() => setFunc(page + 1)}>
        Siguiente
      </button>
    </div>
  )
}

export default Paginator
