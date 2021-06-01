import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { getTestsList } from 'redux/tests/actions';
import { selectTestsList } from 'redux/tests/selectors';

export const mapStateToProps = state => ({
  tests: selectTestsList(state).data
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  getTestsList
}, dispatch);

export const cnMain = cn('PageTest');