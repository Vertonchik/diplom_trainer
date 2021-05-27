import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { logout } from 'redux/auth/actions';
import { selectUser } from 'redux/auth/selectors';

export const mapStateToProps = state => ({
  user: selectUser(state)
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  logout
}, dispatch);


export const classname = cn('AdminPage');
