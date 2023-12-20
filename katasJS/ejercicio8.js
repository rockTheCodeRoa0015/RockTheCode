const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(avengers) {
  let nameAvenger = ''
  for (let avenger of avengers) {
    if (nameAvenger.length < avenger.length) {
      nameAvenger = avenger
    }
  }
  return nameAvenger
}

console.log(findLongestWord(avengers))
