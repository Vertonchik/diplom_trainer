import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getCurrentTest, setCurrentTest } from 'redux/tests/actions';
import { selectCurrentTest } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  data: selectCurrentTest(state).data,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getCurrentTest,
  setCurrentTest,
}, dispatch);

const currYear = new Date().getFullYear();

export const defaultTest = {
  nameId: '',
  nameRu: '',
  nameEn: '',
  descriptionEn: '',
  descriptionRu: '',
  imgUrl: '',
  yearStart: currYear,
  yearEnd: currYear,
  genres: [],
  rating: 0,
  countries: [],
  testType: 'test',
}


export const classname = cn('AdminTestPage');