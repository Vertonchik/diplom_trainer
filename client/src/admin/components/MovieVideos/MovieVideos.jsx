import React, { useMemo } from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './MovieVideos.index';
import './MovieVideos.scss';
import { connect } from 'react-redux';
import { Button, Input, } from 'UI';
import { useParams } from 'react-router-dom';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Component = ({
  data,
  list,
  changeVideo,
  addVideoToList,
  updateVideo, 
  createVideo,
}) => {

  const { movieId } = useParams();

  const onChange = (id, changedData) => changeVideo({ videoId: id, data: changedData })

  const changeExpanded = (id) => {
    data[id].expanded ? onChange(id, { expanded: false }) : onChange(id, { expanded: id });
  }

  return (
    <div className={classname()}>
      <div>
        {list?.map(id => {
          const video = data[id];
          return (
            <Accordion key={id} expanded={video.expanded === id} onChange={() => changeExpanded(id)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classname('Summry')}>
                  <div>
                    <div>{video.nameRu}</div>
                    <div>{video.nameEn}</div>
                  </div>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className={classname('Details')}>
                  <div>
                    <Input
                      value={video.nameRu}
                      label={'Название на русском'}
                      onChange={nameRu => onChange(id, { nameRu })}
                    />

                    <Input
                      value={video.nameEn}
                      label={'Название на английском'}
                      onChange={nameEn => onChange(id, { nameEn })}
                    />
                  </div>

                  <div>
                    <Input
                      multiline
                      value={video.descriptionRu}
                      label={'Описание на русском'}
                      onChange={descriptionRu => onChange(id, { descriptionRu })}
                    />

                    <Input
                      multiline
                      value={video.descriptionEn}
                      label={'Описание на английском'}
                      onChange={descriptionEn => onChange(id, { descriptionEn })}
                    />
                  </div>

                  <div>
                    <Input
                      value={video.durationMin}
                      label={'Продолжительность в минутах'}
                      onChange={durationMin => onChange(id, { durationMin })}
                    />

                    <Input
                      value={video.durationSec}
                      label={'Продолжительность в секундах'}
                      onChange={durationSec => onChange(id, { durationSec })}
                    />
                  </div>

                  <div>
                    <div className={classname('Details-Upload')}>
                      {console.log('DATA', video)}
                      <Input
                        value={video.subtitlesUrlRu}
                        label={'Ссылка на русские субтитры'}
                        onChange={subtitlesUrlRu => onChange(id, { subtitlesUrlRu })}
                      />
                      
                    </div>

                    <div className={classname('Details-Upload')}>
                      <Input
                        value={video.subtitlesUrlEn}
                        label={'Ссылка на английские субтитры'}
                        onChange={subtitlesUrlEn => onChange(id, { subtitlesUrlEn })}
                      />
                      
                    </div>
                  </div>

                  <div>
                    <div className={classname('Details-Upload')}>
                      <Input
                        value={video.videoUrl}
                        label={'Ссылка на видео'}
                        onChange={videoUrl => onChange(id, { videoUrl })}
                      />
                      
                    </div>
                  </div>

                  <Button onClick={() => {
                    video.isNew ? createVideo({videoId: id}) : updateVideo({videoId: id})
                  }} variant='contained'>
                    {video.isNew ? 'Создать' : 'Изменить'}
                  </Button>

                </div>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>

      <Button className={classname('Add')} variant='contained' onClick={() => addVideoToList(movieId)}>
        Добавить
      </Button>
    </div>
  )
}

export const MovieVideos = connect(mapStateToProps, mapDispatchToProps)(Component);