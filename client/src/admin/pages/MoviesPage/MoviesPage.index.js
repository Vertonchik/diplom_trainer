import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getMoviesList, deleteMovie } from 'redux/movies/actions';
import { selectMoviesList } from 'redux/movies/selectors';

export const mapStateToProps = state => ({
  data: selectMoviesList(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMoviesList,
  deleteMovie
}, dispatch);


export const classname = cn('AdminMoviePage');
