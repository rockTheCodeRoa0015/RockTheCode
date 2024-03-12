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
  wrap
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
    >
      {children}
    </StyledCustomDiv>
  )
}

export default CustomDiv
