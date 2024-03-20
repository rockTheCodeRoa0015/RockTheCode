export const getCurrentDate = () => {
  const year = new Date().getFullYear()
  let month = new Date().getMonth()
  let day = new Date().getDate()

  month += 1
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '-' + month + '-' + day
}
