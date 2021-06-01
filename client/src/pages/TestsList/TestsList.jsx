import React, { useEffect } from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestsList.index';
import { connect } from 'react-redux';
import './TestsList.scss';
import { TestCard } from 'components';

const Component = ({
  tests,
  getTestsList
}) => {
  
  useEffect(() => {
    if (!tests.length) getTestsList();
  }, [])

  return (
    <div className={classname()} style={{height: '1500px'}}>

      <div className={classname('Tests')}>
      {tests && tests.map((test) => <TestCard key={test._id} data={test} />)}
      </div>
      
      
    </div>
  )
}

export const TestsList = connect(mapStateToProps, mapDispatchToProps)(Component);