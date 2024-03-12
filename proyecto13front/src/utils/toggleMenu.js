export const toggleMenu = (toggle, setToggle) => {
  if (toggle === 'close') {
    setToggle('open')
  } else {
    setToggle('close')
  }
}

export const toggleMenuClose = (setToggle) => {
  setToggle('close')
}
