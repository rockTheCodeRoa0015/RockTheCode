export const functionButtons = (action, func, navigate) => {
  switch (action) {
    case 'add':
      func()
      break
    case 'login':
      func(false)
      navigate('/login')
      break
    default:
      break
  }
}
