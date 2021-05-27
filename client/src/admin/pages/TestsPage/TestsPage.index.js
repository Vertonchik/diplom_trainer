import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getTestsList, deleteTest } from 'redux/tests/actions';
import { selectTestsList } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectTestsList(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTestsList,
  deleteTest
}, dispatch);


export const classname = cn('AdminTestPage');
