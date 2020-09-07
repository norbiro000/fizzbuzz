
module.exports = function (number) {
  if (number === 3) {
    return { message: 'fizz' }
  }
  return { message: number }
}