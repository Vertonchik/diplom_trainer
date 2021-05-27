import React from 'react';
import { cnMovieCard } from './MovieCard.index';
import { movieTypeNames } from 'utils/constants';
import { NavLink } from 'react-router-dom';
import './MovieCard.scss';

export const MovieCard = ({
  data
}) => {

  return <div className={cnMovieCard('Wrapper')}>
    <NavLink to={`/movie/${data._id}`}>
    <div className={cnMovieCard()}>

      <div style={{backgroundImage: `url(${data.imgUrl})` }} className={cnMovieCard('Image')}></div>

      <div className={cnMovieCard('Rating')}>{data.rating}</div>

      <div className={cnMovieCard('Type')}>{movieTypeNames[data.movieType]}</div>

      <div className={cnMovieCard('Overlay')}></div>

      <div className={cnMovieCard('OverlayInfo')}>
        <div className={cnMovieCard('OverlayInfo-NameEn')}>{data.nameEn}</div>
        <div className={cnMovieCard('OverlayInfo-NameRu')}>{data.nameRu}</div>
        <div className={cnMovieCard('OverlayInfo-Genres')}>{data.genres.join(', ')}</div>
        <div className={cnMovieCard('OverlayInfo-Year')}>{data.yearEnd}</div>
        <div className={cnMovieCard('OverlayInfo-Description')}>{data.descriptionEn}</div>
      </div>

    </div>

    <div className={cnMovieCard('Name')}>{data.nameEn}</div>
    </NavLink>
  </div>
}
