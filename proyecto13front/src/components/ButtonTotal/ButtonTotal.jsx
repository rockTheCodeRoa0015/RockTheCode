import StyledButtonTotal from './ButtonTotal.style'

const ButtonTotal = ({ children, func }) => {
  return <StyledButtonTotal onClick={func}>{children}</StyledButtonTotal>
}

export default ButtonTotal
