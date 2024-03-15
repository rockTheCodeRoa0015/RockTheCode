import StyledMuyCount from './MyCount.style'
import { useContext } from 'react'
import { ToggleMenuContext } from '../../provider/ToggleMenuProvider'
import DivMyCountList from '../DivMyCountList/DivMyCountList'
import Nav from '../Nav/Nav'
import { ListNavMyCount } from '../../constants/dataListNav'
import { ToggleProfileContext } from '../../provider/ToggleProfileProvider'

const MyCount = () => {
  const { setToggle } = useContext(ToggleMenuContext)
  const { toggleprofile, setToggleProfile } = useContext(ToggleProfileContext)
  const funcToggle = () => {
    setToggle(false)
    setToggleProfile(!toggleprofile)
  }

  return (
    <>
      <StyledMuyCount onClick={funcToggle}>Mi Cuenta</StyledMuyCount>
      <DivMyCountList>
        <Nav
          list={ListNavMyCount}
          dir={'column'}
          ai={'center'}
          bg={'transparent'}
          paddingUl={'0'}
        ></Nav>
      </DivMyCountList>
    </>
  )
}

export default MyCount
