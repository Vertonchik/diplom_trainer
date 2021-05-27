import { cn } from '@bem-react/classname';
import { bindActionCreators } from 'redux';
import { changeAuthData, logout } from 'redux/auth/actions';
import { selectUser, selectIsAuth } from 'redux/auth/selectors';

export const mapStateToProps = (state) => ({
  isAuth: selectIsAuth(state),
  user: selectUser(state),
})

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeAuthData,
  logout
}, dispatch);

export const navItems = [
  // { title: 'Главная', to: '/' },
  { title: 'Тесты', to: '/tests' },
]

export const cnNavbar = cn('Navbar');