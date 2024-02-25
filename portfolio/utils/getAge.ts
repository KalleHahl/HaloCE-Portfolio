const getAge = (): number => {
  const birthdate = new Date(1998, 10, 20)
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
