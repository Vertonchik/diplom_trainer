import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeCurrentMovie, updateMovie, createMovie } from 'redux/movies/actions';
import { selectCurrentMovie } from 'redux/movies/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentMovie(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeCurrentMovie,
  updateMovie,
  createMovie
}, dispatch);

export const classname = cn('AdminMovieMain');