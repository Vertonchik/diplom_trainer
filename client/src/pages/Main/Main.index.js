import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getMoviesList } from 'redux/movies/actions';
import { selectMoviesList } from 'redux/movies/selectors';

export const mapStateToProps = state => ({
  movies: selectMoviesList(state).data
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMoviesList
}, dispatch);

export const cnMain = cn('Main');