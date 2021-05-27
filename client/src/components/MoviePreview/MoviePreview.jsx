import React from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './MoviePreview.index';
import './MoviePreview.scss';
import { Button } from 'UI';
import { connect } from 'react-redux';

const Component = ({data, video, setPlayerOpen, setPlayerVideo}) => {

  const onPlayerOpen = () => {
    setPlayerVideo(video);
    setPlayerOpen(true);
  }

  return (
    <div className={classname()}>
      <img className={classname('Image')} src={data.imgUrl}/>

      {data.movieType === 'movie' && <div className={classname('MovieActions')}>
        <Button className={classname('Action')} variant='contained' onClick={onPlayerOpen}>Смотреть</Button>
        <Button className={classname('Action')} variant='outlined'>Учить слова</Button>
      </div>}

    </div>
  )
}

export const MoviePreview = connect(mapStateToProps, mapDispatchToProps)(Component);