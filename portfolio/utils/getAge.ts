const getAge = (): number => {
  // JavaScript months start from 0 (January = 0), so October is 9
  const OCTOBER = 9
  const birthdate = new Date(1998, OCTOBER, 20)
  const today = new Date()
  let age = today.getFullYear() - birthdate.getFullYear()
  const monthDifference = today.getMonth() - birthdate.getMonth()

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--
  }

  return age
}

export default getAge
