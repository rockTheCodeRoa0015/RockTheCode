const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(duplicates) {
  let result = duplicates.filter((item, index) => {
    return duplicates.indexOf(item) === index
  })
  return result
}

console.log(removeDuplicates(duplicates))
