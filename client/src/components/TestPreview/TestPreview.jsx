import React from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestPreview.index';
import './TestPreview.scss';
import { Button } from 'UI';
import { connect } from 'react-redux';

const Component = ({data, question }) => {

  const onPlayerOpen = () => {
  
  }

  return (
    <div className={classname()}>
      <img className={classname('Image')} src={data.imgUrl}/>

      {data.testType === 'test' && <div className={classname('TestActions')}>
        <Button className={classname('Action')} variant='contained' onClick={onPlayerOpen}>Смотреть</Button>
        <Button className={classname('Action')} variant='outlined'>Учить слова</Button>
      </div>}

    </div>
  )
}

export const TestPreview = connect(mapStateToProps, mapDispatchToProps)(Component);