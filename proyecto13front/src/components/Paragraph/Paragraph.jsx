import StyledParagraph from './Paragraph.style'

const Paragraph = ({
  children,
  fontsize,
  padding,
  bg,
  cursor,
  radius,
  color,
  fontweight,
  textalign,
  textshadow,
  bgh
}) => {
  return (
    <StyledParagraph
      fontsize={fontsize}
      padding={padding}
      bg={bg}
      cursor={cursor}
      radius={radius}
      color={color}
      fontweight={fontweight}
      textalign={textalign}
      textshadow={textshadow}
      bgh={bgh}
    >
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
