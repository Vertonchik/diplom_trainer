import React, { useMemo } from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestQuestions.index';
import './TestQuestions.scss';
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
  changeQuestion,
  addQuestionToList,
  updateQuestion, 
  createQuestion,
}) => {

  const { testId } = useParams();

  const onChange = (id, changedData) => changeQuestion({ questionId: id, data: changedData })

  const changeExpanded = (id) => {
    data[id].expanded ? onChange(id, { expanded: false }) : onChange(id, { expanded: id });
  }

  return (
    <div className={classname()}>
      <div>
        {list?.map(id => {
          const question = data[id];
          return (
            <Accordion key={id} expanded={question.expanded === id} onChange={() => changeExpanded(id)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classname('Summry')}>
                  <div>
                    <div>{question.nameTest}</div>
                    <div>{question.nameEn}</div>
                  </div>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className={classname('Details')}>
                  <div>
                    <Input
                      value={question.nameTest}
                      label={'Название на русском'}
                      onChange={nameTest => onChange(id, { nameTest })}
                    />

                    <Input
                      value={question.nameEn}
                      label={'Название на английском'}
                      onChange={nameEn => onChange(id, { nameEn })}
                    />
                  </div>

                  <div>
                    <Input
                      multiline
                      value={question.descriptionTest}
                      label={'Описание на русском'}
                      onChange={descriptionTest => onChange(id, { descriptionTest })}
                    />

                    <Input
                      multiline
                      value={question.descriptionEn}
                      label={'Описание на английском'}
                      onChange={descriptionEn => onChange(id, { descriptionEn })}
                    />
                  </div>

                  <div>
                    <Input
                      value={question.durationMin}
                      label={'Продолжительность в минутах'}
                      onChange={durationMin => onChange(id, { durationMin })}
                    />

                    <Input
                      value={question.durationSec}
                      label={'Продолжительность в секундах'}
                      onChange={durationSec => onChange(id, { durationSec })}
                    />
                  </div>

                  <div>
                    <div className={classname('Details-Upload')}>
                      {console.log('DATA', question)}
                      <Input
                        value={question.subtitlesUrlRu}
                        label={'Ссылка на русские субтитры'}
                        onChange={subtitlesUrlRu => onChange(id, { subtitlesUrlRu })}
                      />
                      
                    </div>

                    <div className={classname('Details-Upload')}>
                      <Input
                        value={question.subtitlesUrlEn}
                        label={'Ссылка на английские субтитры'}
                        onChange={subtitlesUrlEn => onChange(id, { subtitlesUrlEn })}
                      />
                      
                    </div>
                  </div>

                  <div>
                    <div className={classname('Details-Upload')}>
                      <Input
                        value={question.questionUrl}
                        label={'Ссылка на видео'}
                        onChange={questionUrl => onChange(id, { questionUrl })}
                      />
                      
                    </div>
                  </div>

                  <Button onClick={() => {
                    question.isNew ? createQuestion({questionId: id}) : updateQuestion({questionId: id})
                  }} variant='contained'>
                    {question.isNew ? 'Создать' : 'Изменить'}
                  </Button>

                </div>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </div>

      <Button className={classname('Add')} variant='contained' onClick={() => addQuestionToList(testId)}>
        Добавить
      </Button>
    </div>
  )
}

export const TestQuestions = connect(mapStateToProps, mapDispatchToProps)(Component);