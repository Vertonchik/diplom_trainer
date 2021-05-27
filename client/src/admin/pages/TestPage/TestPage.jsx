import React, { useEffect } from 'react';
import { classname, mapStateToProps, mapDispatchToProps, defaultTest } from './TestPage.index';
import './TestPage.scss';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Tabs } from 'UI';

import { TestMain } from 'admin/components/TestMain/TestMain';
import { TestVideos } from 'admin/components/TestVideos/TestVideos';

const Component = ({ data, getCurrentTest, setCurrentTest }) => {

  const { testId, tab } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (testId !== 'add') getCurrentTest({testId, isAdmin: true});
    else setCurrentTest({data: defaultTest, adminVideos: {}});
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
        {tab === 'main' && <TestMain />}
        {tab === 'videos' && <TestVideos />}
      </div>
    </div>
  )
}


export const TestPage = connect(mapStateToProps, mapDispatchToProps)(Component);
