import { useContext } from 'react'
import StyledDivMyCountList from './DivMyCountList.style'
import { ToggleProfileContext } from '../../provider/ToggleProfileProvider'

const DivMyCountList = ({ children }) => {
  const { toggleprofile } = useContext(ToggleProfileContext)
  return (
    <StyledDivMyCountList toggleprofile={toggleprofile ? 'open' : 'close'}>
      {children}
    </StyledDivMyCountList>
  )
}

export default DivMyCountList
