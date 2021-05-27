import testImg from 'assets/img/mock/test.png';

export const baseTestData = {
  _id: '1',
  nameRu: 'Ход королевы',
  nameEn: 'The Queen\'s Gambit',
  descriptionEn: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta',
  descriptionRu: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam debitis quidem cumque ipsum iure ea consequuntur consectetur harum porro numquam soluta',
  imgUrl: testImg,
  yearStart: 2021,
  yearEnd: 2021,
  genres: ['Драмма'],
  rating: 8.6,
  countries: ['США'],
  typeName: 'Фильм',
  type: 'test',
  typeName: 'Фильм',
  duration: 120,
  videos: [],
}

export const userTestData = {
  ...baseTestData
}