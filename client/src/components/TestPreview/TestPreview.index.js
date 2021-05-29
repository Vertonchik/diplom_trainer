import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { setPlayerOpen, setPlayerQuestion } from 'redux/player/actions';

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setPlayerOpen,
  setPlayerQuestion
}, dispatch);

export const classname = cn('TestPreview');