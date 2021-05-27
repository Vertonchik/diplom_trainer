import React, { useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps, classname } from './MoviesPage.index';
import './MoviesPage.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'UI';

const Component = ({ data, getMoviesList, deleteMovie }) => {

  useEffect(() => {
    if (!data?.length) getMoviesList()
  }, [data?.length])

  const onDeleteMovie = (e, movieId) => {
    e.preventDefault();
    deleteMovie(movieId);
  }

  return (
    <div className={classname()}>

      <div className={classname('Header')}>
        <div></div>
        <NavLink to={`/admin/movies/add/main`}>
          <Button variant='contained'>Добавить</Button>
        </NavLink>
      </div>

      {data?.map(movie => (
        <NavLink key={movie._id} to={`/admin/movies/${movie._id}/main`}>
          <div className={classname('Item')}>

            <img src={movie.imgUrl} />
            <div>
              <div>{movie.nameRu}</div>
              <div>{movie.nameEn}</div>
            </div>

            <div>
              <div>{movie.yearStart}-{movie.yearEnd}</div>
              <div>{movie.typeName}</div>
            </div>

            <div>
              <Button onClick={e => onDeleteMovie(e, movie._id)} className={classname('Item-Delete')} variant='contained'>Удалить</Button>
            </div>

          </div>
        </NavLink>
      ))}
    </div>
  )
}

export const MoviesPage = connect(mapStateToProps, mapDispatchToProps)(Component);