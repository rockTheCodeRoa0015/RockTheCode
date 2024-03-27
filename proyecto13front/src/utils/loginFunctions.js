export const saveLoginData = (res) => {
  localStorage.setItem('token', res.token)
  localStorage.setItem('_id', res.user._id)
  localStorage.setItem('id', res.user.id)
}
