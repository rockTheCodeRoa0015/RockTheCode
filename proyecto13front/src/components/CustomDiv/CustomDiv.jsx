import StyledCustomDiv from './CustomDiv.style'

const CustomDiv = ({
  children,
  display,
  dir,
  jc,
  ai,
  w,
  h,
  pos,
  left,
  top,
  index,
  gap,
  bg,
  wrap,
  br,
  padding,
  border
}) => {
  return (
    <StyledCustomDiv
      display={display}
      dir={dir}
      jc={jc}
      ai={ai}
      w={w}
      h={h}
      pos={pos}
      left={left}
      top={top}
      index={index}
      gap={gap}
      bg={bg}
      wrap={wrap}
      br={br}
      padding={padding}
      border={border}
    >
      {children}
    </StyledCustomDiv>
  )
}

export default CustomDiv
