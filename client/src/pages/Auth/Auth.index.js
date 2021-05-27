import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeAuthData } from 'redux/auth/actions';

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuthData
}, dispatch);

export const cnAuth = cn('Auth');