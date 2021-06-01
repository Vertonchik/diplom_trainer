import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeQuestion, addQuestionToList, updateQuestion, createQuestion, addQuestionAnswer, deleteQuestionAnswer, changeQuestionAnswer } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).adminQuestions,
  list: selectCurrentTest(state).questionsList
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeQuestion,
  addQuestionToList,
  updateQuestion, 
  createQuestion,
  addQuestionAnswer,
  deleteQuestionAnswer,
  changeQuestionAnswer
}, dispatch);

export const classname = cn('AdminTestQuestions');