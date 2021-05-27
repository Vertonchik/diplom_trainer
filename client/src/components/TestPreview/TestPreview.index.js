import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { setPlayerOpen, setPlayerVideo } from 'redux/player/actions';

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setPlayerOpen,
  setPlayerVideo
}, dispatch);

export const classname = cn('TestPreview');