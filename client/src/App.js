import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initUser } from 'redux/auth/actions';

import { Main } from 'pages/Main/Main';
import { Auth } from 'pages/Auth/Auth';
// import { TestPage } from 'pages/TestPage/TestPage';
import { AdminPage } from 'admin/Admin';

import { Navbar } from 'components';

const App = ({ isAuth, initUser }) => {

  useEffect(() => {
    initUser();
  }, [isAuth])

  return (
    <div className='App'>

      <Navbar />

      {isAuth ? null : <Redirect to='/' />}

      <div className='MainLayout'>
        <Switch>
          <Route path='/' exact render={props => isAuth ? <Main /> : <Auth />} />
          <Route path='/tests' exact render={() => <Main />} />
          {/* Здесь страница с прохождением теста */}
          {/* <Route path='/test/:testId' exact render={() => <TestPage />} /> */} 

          <Route path='/admin' render={() => <AdminPage />} />

        </Switch>
      </div>

      <ToastContainer />
    </div>
  );
}

export default connect(({ auth }) => ({ isAuth: auth.isAuth }), dispatch => bindActionCreators({ initUser }, dispatch))(App)