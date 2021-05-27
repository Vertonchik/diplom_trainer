import React, { useEffect } from 'react';
import { cnMain, mapStateToProps, mapDispatchToProps } from './Main.index';
import { connect } from 'react-redux';
import './Main.scss';
import { MovieCard } from 'components';

const Component = ({
  movies,
  getMoviesList
}) => {
  
  useEffect(() => {
    if (!movies.length) getMoviesList();
  }, [])

  return (
    <div className={cnMain()} style={{height: '1500px'}}>

      <div className={cnMain('Movies')}>
      {movies && movies.map((movie) => <MovieCard key={movie._id} data={movie} />)}
      </div>
      
      
    </div>
  )
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(Component);