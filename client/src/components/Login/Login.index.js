import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeAuthData, login } from 'redux/auth/actions';
import { selectAuthData } from 'redux/auth/selectors';

export const mapStateToProps = (state) => ({
  data: selectAuthData(state),
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuthData,
  login
}, dispatch);

export const cnLogin = cn('Login');