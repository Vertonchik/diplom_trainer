export const genresNames = {
  drama: 'Драма',
  comedy: 'Комедия',
  musical: 'Мюзикл ',
  romance: 'Мелодрама',
  detective: 'Детектив',
  action: 'Экшн',
  thriller: 'Триллер',
  horror: 'Ужасы',
  disaster: 'Катастрофа',
  scienceFiction: 'Научная фантастика',
  fantasy: 'Фэнтези',
  documentary: 'Документальный фильм',
  western: 'Вестерн',
  historical: 'Исторический',
}
export const geners = Object.keys(genresNames).map(key => ({ value: key, title: genresNames[key] }));

export const countriesNames = {
  usa: 'США',
  eng: 'Англия'
}
export const countries = Object.keys(countriesNames).map(key => ({ value: key, title: countriesNames[key] }));

export const movieTypeNames = {
  movie: 'Фильм',
  series: 'Сериал',
  cartoon: 'Мультфильм'
}
export const movieTypes = Object.keys(movieTypeNames).map(key => ({ value: key, title: movieTypeNames[key] }));
