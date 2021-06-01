import React from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestMain.index';
import './TestMain.scss';
import { connect } from 'react-redux';
import { Input, Select, Button } from 'UI';
// import { FileLoader } from 'components';
import {  testTypes } from 'utils/constants';
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

        {/* <Input
          multiline
          value={data.descriptionEn}
          label={'Описание на английском'}
          onChange={descriptionEn => changeCurrentTest({ descriptionEn })}
        /> */}

        {/* <Input
          value={data.rating}
          label={'Рейтинг (макс 10)'}
          onChange={rating => changeCurrentTest({ rating })}
          type='number'
        /> */}

        {/* <Input
          value={data.yearStart}
          label={'Год начала'}
          onChange={yearStart => changeCurrentTest({ yearStart, yearEnd: yearStart })}
          type='number'
        /> */}

        {/* <Input
          value={data.yearEnd}
          label={'Год окончания'}
          onChange={yearEnd => changeCurrentTest({ yearEnd })}
          type='number'
        /> */}

        {/* <Select
          items={geners}
          label={'Выберите жанры'}
          value={data.genres}
          multiple={true}
          onChange={value => changeCurrentTest({ genres: value.map(el => el.value) })}
        /> */}

        {/* <Select
          items={countries}
          label={'Выберите страны'}
          value={data.countries}
          multiple={true}
          onChange={value => changeCurrentTest({ countries: value.map(el => el.value) })}
        /> */}

        <Select
          items={testTypes}
          label={'Выберите Тип'}
          value={data.testType}
          multiple={false}
          onChange={value => changeCurrentTest({ testType: value?.value })}
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
