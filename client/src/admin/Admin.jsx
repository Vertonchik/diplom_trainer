import React, {useEffect} from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './Admin.index';
import './Admin.scss';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from 'admin/pages/MainPage/MainPage';
import { MoviesPage } from 'admin/pages/MoviesPage/MoviesPage';
import { MoviePage } from 'admin/pages/MoviePage/MoviePage';

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
        <Route path={`/admin/movies/`} exact component={MoviesPage} />
        <Route path='/admin/movies/:movieId/:tab' exact component={MoviePage} />
      </Switch>
      
    </div>
  )
}

export const AdminPage = connect(mapStateToProps, mapDispatchToProps)(Component);