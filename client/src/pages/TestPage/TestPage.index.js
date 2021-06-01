import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getCurrentTest, setCurrentTest } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).questions,
  questionsIds: selectCurrentTest(state).questionsList,
  loading: selectCurrentTest(state).loading,
  currentQuestionId: selectCurrentTest(state).currentQuestionId
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentTest,
  setCurrentTest
}, dispatch);

export const classname = cn('TestPage');