import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeVideo, addVideoToList, updateVideo, createVideo } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).videos,
  list: selectCurrentTest(state).videosList
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeVideo,
  addVideoToList,
  updateVideo, 
  createVideo
}, dispatch);

export const classname = cn('AdminTestVideos');