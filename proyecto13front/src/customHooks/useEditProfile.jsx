import { useState } from 'react'

const useEditProfile = () => {
  const [edit, setEdit] = useState(true)
  const [btnName, setBtnName] = useState('Editar')

  const modifyEdit = () => {
    setEdit(!edit)
  }

  const mofifyBtnName = () => {
    if (btnName === 'Editar') {
      setBtnName('Modificar')
    } else {
      setBtnName('Editar')
    }
  }

  return { edit, btnName, modifyEdit, mofifyBtnName }
}

export default useEditProfile
