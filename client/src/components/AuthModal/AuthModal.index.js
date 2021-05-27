import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeAuthData, clearAuthData } from 'redux/auth/actions';
import { selectAuthData } from 'redux/auth/selectors';

export const mapStateToProps = (state) => ({
  type: selectAuthData(state).type,
  open: selectAuthData(state).open,
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuthData,
  clearAuthData
}, dispatch);

export const cnAuthModal = cn('AuthModal');