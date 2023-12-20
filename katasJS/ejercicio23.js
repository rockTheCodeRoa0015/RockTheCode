const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
let moviesShort = []
let moviesMedium = []
let moviesLarge = []

for (let movie of movies) {
  if (movie.durationInMinutes < 100) {
    moviesShort.push(movie.name)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
    moviesMedium.push(movie.name)
  } else {
    moviesLarge.push(movie.name)
  }
}

console.log('Peliculas cortas: ' + moviesShort)
console.log('Peliculas medianas: ' + moviesMedium)
console.log('Peliculas largas: ' + moviesLarge)
