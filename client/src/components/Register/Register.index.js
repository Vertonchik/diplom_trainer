import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeAuthData, registration } from 'redux/auth/actions';
import { selectAuthData } from 'redux/auth/selectors';

export const mapStateToProps = (state) => ({
  data: selectAuthData(state),
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuthData,
  registration,
}, dispatch);

export const cnRegister = cn('Register');