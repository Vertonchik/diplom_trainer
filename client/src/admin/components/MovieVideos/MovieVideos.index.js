import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeVideo, addVideoToList, updateVideo, createVideo } from 'redux/movies/actions';
import { selectCurrentMovie } from 'redux/movies/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentMovie(state).videos,
  list: selectCurrentMovie(state).videosList
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVideo,
  addVideoToList,
  updateVideo, 
  createVideo
}, dispatch);

export const classname = cn('AdminMovieVideos');