import StyledTitle from './Title.style'

const Title = ({ children, pt, color }) => {
  return (
    <StyledTitle pt={pt} color={color}>
      {children}
    </StyledTitle>
  )
}

export default Title
