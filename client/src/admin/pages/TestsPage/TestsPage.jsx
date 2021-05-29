import React, { useEffect } from 'react';
import { mapStateToProps, mapDispatchToProps, classname } from './TestsPage.index';
import './TestsPage.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'UI';

const Component = ({ data, getTestsList, deleteTest }) => {

  useEffect(() => {
    if (!data?.length) getTestsList()
  }, [data?.length])

  const onDeleteTest = (e, testId) => {
    e.preventDefault();
    deleteTest(testId);
  }

  return (
    <div className={classname()}>

      <div className={classname('Header')}>
        <div></div>
        <NavLink to={`/admin/tests/add/main`}>
          <Button variant='contained'>Добавить</Button>
        </NavLink>
      </div>

      {data?.map(test => (
        <NavLink key={test._id} to={`/admin/tests/${test._id}/main`}>
          <div className={classname('Item')}>

            <img src={test.imgUrl} />
            <div>
              <div>{test.nameTest}</div>
              <div>{test.nameEn}</div>
            </div>

            <div>
              <div>{test.yearStart}-{test.yearEnd}</div>
              <div>{test.typeName}</div>
            </div>

            <div>
              <Button onClick={e => onDeleteTest(e, test._id)} className={classname('Item-Delete')} variant='contained'>Удалить</Button>
            </div>

          </div>
        </NavLink>
      ))}
    </div>
  )
}

export const TestsPage = connect(mapStateToProps, mapDispatchToProps)(Component);