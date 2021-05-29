import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeQuestion, addQuestionToList, updateQuestion, createQuestion } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).questions,
  list: selectCurrentTest(state).questionsList
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeQuestion,
  addQuestionToList,
  updateQuestion, 
  createQuestion
}, dispatch);

export const classname = cn('AdminTestQuestions');