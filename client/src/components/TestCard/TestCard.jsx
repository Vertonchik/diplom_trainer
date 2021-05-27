import React from 'react';
import { cnTestCard } from './TestCard.index';
import { testTypeNames } from 'utils/constants';
import { NavLink } from 'react-router-dom';
import './TestCard.scss';

export const TestCard = ({
  data
}) => {

  return <div className={cnTestCard('Wrapper')}>
    <NavLink to={`/test/${data._id}`}>
    <div className={cnTestCard()}>

      <div style={{backgroundImage: `url(${data.imgUrl})` }} className={cnTestCard('Image')}></div>

      <div className={cnTestCard('Rating')}>{data.rating}</div>

      <div className={cnTestCard('Type')}>{testTypeNames[data.testType]}</div>

      <div className={cnTestCard('Overlay')}></div>

      <div className={cnTestCard('OverlayInfo')}>
        <div className={cnTestCard('OverlayInfo-NameEn')}>{data.nameEn}</div>
        <div className={cnTestCard('OverlayInfo-NameRu')}>{data.nameRu}</div>
        <div className={cnTestCard('OverlayInfo-Genres')}>{data.genres.join(', ')}</div>
        <div className={cnTestCard('OverlayInfo-Year')}>{data.yearEnd}</div>
        <div className={cnTestCard('OverlayInfo-Description')}>{data.descriptionEn}</div>
      </div>

    </div>

    <div className={cnTestCard('Name')}>{data.nameEn}</div>
    </NavLink>
  </div>
}
