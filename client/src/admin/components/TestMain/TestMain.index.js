import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeCurrentTest, updateTest, createTest } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeCurrentTest,
  updateTest,
  createTest
}, dispatch);

export const classname = cn('AdminTestMain');