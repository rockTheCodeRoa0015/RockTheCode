import StyledImage from './Image.style'

const Image = ({ src, alt, w, h }) => {
  return <StyledImage src={src} alt={alt} w={w} h={h}></StyledImage>
}

export default Image
