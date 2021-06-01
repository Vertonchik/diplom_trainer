import React, { useEffect } from 'react';
import { cnMain, mapStateToProps, mapDispatchToProps } from './PageTest.index';
import { connect } from 'react-redux';
import './PageTest.scss';
import { TestCard } from 'components';

const Component = ({
  tests,
  getTestsList
}) => {
  
  useEffect(() => {
    if (!tests.length) getTestsList();
  }, [])

  return (
    <div className={cnMain()} style={{height: '1500px'}}>

      <div className={cnMain('Tests')}>
      {tests && tests.map((test) => <TestCard key={test._id} data={test} />)}
      </div>
      
      
    </div>
  )
}

export const PageTest = connect(mapStateToProps, mapDispatchToProps)(Component);