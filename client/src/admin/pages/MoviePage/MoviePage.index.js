import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getCurrentMovie, setCurrentMovie } from 'redux/movies/actions';
import { selectCurrentMovie } from 'redux/movies/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentMovie(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentMovie,
  setCurrentMovie,
}, dispatch);

const currYear = new Date().getFullYear();

export const defaultMovie = {
  nameId: '',
  nameRu: '',
  nameEn: '',
  descriptionEn: '',
  descriptionRu: '',
  imgUrl: '',
  yearStart: currYear,
  yearEnd: currYear,
  genres: [],
  rating: 0,
  countries: [],
  movieType: 'movie',
}


export const classname = cn('AdminMoviePage');