import React, {useEffect} from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './Admin.index';
import './Admin.scss';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from 'admin/pages/MainPage/MainPage';
import { TestsPage } from 'admin/pages/TestsPage/TestsPage';
import { TestPage } from 'admin/pages/TestPage/TestPage';

const Component = ({
  user,
  logout
}) => {

  useEffect(() => {
    if (user && !user.isAdmin) logout();
  }, [user])

  

  return (
    <div className={classname()}>
      <Switch>
        <Route path={`/admin/`} exact component={MainPage} />
        <Route path={`/admin/tests/`} exact component={TestsPage} />
        <Route path='/admin/tests/:testId/:tab' exact component={TestPage} />
      </Switch>
      
    </div>
  )
}

export const AdminPage = connect(mapStateToProps, mapDispatchToProps)(Component);