import movieImg from 'assets/img/mock/movie.png';

export const baseMovieData = {
  _id: '1',
  nameRu: 'Ход королевы',
  nameEn: 'The Queen\'s Gambit',
  descriptionEn: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta',
  descriptionRu: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta',
  imgUrl: movieImg,
  yearStart: 2021,
  yearEnd: 2021,
  genres: ['Драмма'],
  rating: 8.6,
  countries: ['США'],
  typeName: 'Фильм',
  type: 'movie',
  typeName: 'Фильм',
  duration: 120,
  videos: [],
}

export const userMovieData = {
  ...baseMovieData
}