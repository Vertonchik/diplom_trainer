import React from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './MovieMain.index';
import './MovieMain.scss';
import { connect } from 'react-redux';
import { Input, Select, Button } from 'UI';
// import { FileLoader } from 'components';
import { geners, countries, movieTypes } from 'utils/constants';
import { useParams, useHistory } from 'react-router-dom';

const Component = ({ 
  data, 
  changeCurrentMovie,
  updateMovie,
  createMovie
 }) => {

  const history = useHistory();
  const { movieId } = useParams();

  if (!data) return null;

  return (
    <div className={classname()}>
      <div className={classname('Left')}>
        <Input
          value={data.nameRu}
          label={'Название на русском'}
          onChange={nameRu => changeCurrentMovie({ nameRu })}
        />

        <Input
          value={data.nameEn}
          label={'Название на английском'}
          onChange={nameEn => changeCurrentMovie({ nameEn })}
        />

        <Input
          multiline
          value={data.descriptionRu}
          label={'Описание на русском'}
          onChange={descriptionRu => changeCurrentMovie({ descriptionRu })}
        />

        <Input
          multiline
          value={data.descriptionEn}
          label={'Описание на английском'}
          onChange={descriptionEn => changeCurrentMovie({ descriptionEn })}
        />

        <Input
          value={data.rating}
          label={'Рейтинг (макс 10)'}
          onChange={rating => changeCurrentMovie({ rating })}
          type='number'
        />

        <Input
          value={data.yearStart}
          label={'Год начала'}
          onChange={yearStart => changeCurrentMovie({ yearStart, yearEnd: yearStart })}
          type='number'
        />

        <Input
          value={data.yearEnd}
          label={'Год окончания'}
          onChange={yearEnd => changeCurrentMovie({ yearEnd })}
          type='number'
        />

        <Select
          items={geners}
          label={'Выберите жанры'}
          value={data.genres}
          multiple={true}
          onChange={value => changeCurrentMovie({ genres: value.map(el => el.value) })}
        />

        <Select
          items={countries}
          label={'Выберите страны'}
          value={data.countries}
          multiple={true}
          onChange={value => changeCurrentMovie({ countries: value.map(el => el.value) })}
        />

        <Select
          items={movieTypes}
          label={'Выберите Тип'}
          value={data.movieType}
          multiple={false}
          onChange={value => changeCurrentMovie({ movieType: value?.value })}
        />

      </div>

      <div className={classname('Right')}>
        {/* <FileLoader previewUrl={data.imgUrl} onFileLoad={file => changeCurrentMovie({ imgUrl: file.url })} /> */}

        <div className={classname('Right-Button')}>
          {movieId === 'add' ?
          <Button variant='contained' onClick={() => createMovie({cb: (id) => history.push(`/admin/movies/${id}/main`) })}>Создать</Button> :
          <Button variant='contained' onClick={() => updateMovie({cb: () => history.push(`/admin/movies`) })}>Изменить</Button> 
        }
        </div>
      </div>
    </div>
  )
}


export const MovieMain = connect(mapStateToProps, mapDispatchToProps)(Component);
