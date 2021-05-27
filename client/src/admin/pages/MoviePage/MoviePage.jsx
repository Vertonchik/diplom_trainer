import React, { useEffect } from 'react';
import { classname, mapStateToProps, mapDispatchToProps, defaultMovie } from './MoviePage.index';
import './MoviePage.scss';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Tabs } from 'UI';

import { MovieMain } from 'admin/components/MovieMain/MovieMain';
import { MovieVideos } from 'admin/components/MovieVideos/MovieVideos';

const Component = ({ data, getCurrentMovie, setCurrentMovie }) => {

  const { movieId, tab } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (movieId !== 'add') getCurrentMovie({movieId, isAdmin: true});
    else setCurrentMovie({data: defaultMovie, adminVideos: {}});
  }, [])

  const items = [
    { title: 'Основное', value: 'main' },
    { title: 'Видео', value: 'videos' },
  ]

  if (!data) return null;

  return (
    <div className={classname()}>
      <div className={classname('Tabs')}>
        <Tabs value={tab} size='xl' items={items} onChange={(value) => history.push(value)} />
      </div>

      <div>
        {tab === 'main' && <MovieMain />}
        {tab === 'videos' && <MovieVideos />}
      </div>
    </div>
  )
}


export const MoviePage = connect(mapStateToProps, mapDispatchToProps)(Component);
