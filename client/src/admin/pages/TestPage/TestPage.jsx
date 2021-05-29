import React, { useEffect } from 'react';
import { classname, mapStateToProps, mapDispatchToProps, defaultTest } from './TestPage.index';
import './TestPage.scss';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Tabs } from 'UI';

import { TestMain } from 'admin/components/TestMain/TestMain';
import { TestQuestions } from 'admin/components/TestQuestions/TestQuestions';

const Component = ({ data, getCurrentTest, setCurrentTest }) => {

  const { testId, tab } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (testId !== 'add') getCurrentTest({testId, isAdmin: true});
    else setCurrentTest({data: defaultTest, adminQuestions: {}});
  }, [])

  const items = [
    { title: 'Тест', value: 'main' },
    { title: 'Вопросы', value: 'questions' },
  ]

  if (!data) return null;

  return (
    <div className={classname()}>
      <div className={classname('Tabs')}>
        <Tabs value={tab} size='xl' items={items} onChange={(value) => history.push(value)} />
      </div>

      <div>
        {tab === 'main' && <TestMain />}
        {tab === 'questions' && <TestQuestions />}
      </div>
    </div>
  )
}


export const TestPage = connect(mapStateToProps, mapDispatchToProps)(Component);
