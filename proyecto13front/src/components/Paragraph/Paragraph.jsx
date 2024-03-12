import StyledParagraph from './Paragraph.style'

const Paragraph = ({ children, padding, bg, cursor, radius, color }) => {
  return (
    <StyledParagraph
      padding={padding}
      bg={bg}
      cursor={cursor}
      radius={radius}
      color={color}
    >
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
