import StyledButton from './Button.style'

const Button = ({ children, type }) => {
  return <StyledButton type={type ? type : 'button'}>{children}</StyledButton>
}

export default Button
