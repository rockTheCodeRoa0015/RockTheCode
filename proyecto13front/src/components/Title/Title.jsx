import StyledTitle from './Title.style'

const Title = ({ children, pt, color, fs }) => {
  return (
    <StyledTitle pt={pt} color={color} fs={fs}>
      {children}
    </StyledTitle>
  )
}

export default Title
