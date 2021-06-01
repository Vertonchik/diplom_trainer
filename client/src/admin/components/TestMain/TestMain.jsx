import React from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestMain.index';
import './TestMain.scss';
import { connect } from 'react-redux';
import { Input, Button } from 'UI';
import { useParams, useHistory } from 'react-router-dom';

const Component = ({ 
  data, 
  changeCurrentTest,
  updateTest,
  createTest
 }) => {

  const history = useHistory();
  const { testId } = useParams();

  if (!data) return null;

  return (
    <div className={classname()}>
      <div className={classname('Left')}>
        <Input
          value={data.nameTest}
          label={'Название теста'}
          onChange={nameTest => changeCurrentTest({ nameTest })}
        />

        <Input
          value={data.testPassword}
          label={'Пароль к тесту'}
          onChange={testPassword => changeCurrentTest({ testPassword })}
        />

        <Input
          multiline
          value={data.descriptionTest}
          label={'Описание теста'}
          onChange={descriptionTest => changeCurrentTest({ descriptionTest })}
        />

       

      </div>

      <div className={classname('Right')}>
        {/* <FileLoader previewUrl={data.imgUrl} onFileLoad={file => changeCurrentTest({ imgUrl: file.url })} /> */}

        <div className={classname('Right-Button')}>
          {testId === 'add' ?
          <Button variant='contained' onClick={() => createTest({cb: (id) => history.push(`/admin/tests/${id}/main`) })}>Создать</Button> :
          <Button variant='contained' onClick={() => updateTest({cb: () => history.push(`/admin/tests`) })}>Изменить</Button> 
        }
        </div>
      </div>
    </div>
  )
}


export const TestMain = connect(mapStateToProps, mapDispatchToProps)(Component);
