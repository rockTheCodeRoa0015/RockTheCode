import './ShowCount.css'

const ShowCount = ({ num }) => {
  return (
    <>
      <h1>
        You clicked here {num} {num === 1 ? 'time' : 'times'}
      </h1>
    </>
  )
}

export default ShowCount
