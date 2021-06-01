import React, { useMemo } from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestQuestions.index';
import './TestQuestions.scss';
import { connect } from 'react-redux';
import { Button, Input, Select } from 'UI';
import {  testTypes } from 'utils/constants';
import { useParams } from 'react-router-dom';
import {colors} from 'UI';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

const Component = ({
  data,
  list,
  changeQuestion,
  addQuestionToList,
  updateQuestion, 
  createQuestion,
  addQuestionAnswer,
  deleteQuestionAnswer,
  changeQuestionAnswer
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
                    <div>{question.question}</div>
                    <div>{question.testPassword}</div>
                  </div>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className={classname('Details')}>
                  <div>
                    {/* <Input
                      value={question.nameQuestion}
                      label={'Название задания'}
                      onChange={nameQuestion => onChange(id, { nameQuestion })}
                    /> */}

                    <Input
                      value={question.question}
                      label={'Вопрос'}
                      onChange={question => onChange(id, { question })}
                    />
                  </div>

                  <div>
                    <Select
                      items={testTypes}
                      label={'Выберите Тип'}
                      value={question.type}
                      multiple={false}
                      onChange={el => onChange(id, { type: el?.value })}
                    />
                  </div>

                  {question.type === 'test' && <div className={classname('Answers')}>
                    {console.log('ANSWERS', question, data)}
                    {question.answers?.map((answer, index) => {

                      return (
                        <div className={classname('Answers-Item')}>
                          <Checkbox
                            checked={answer.isRight}
                            style={{color: colors.blue}}
                            // className={classname('Answers-Item-Right')}
                            onChange={event => changeQuestionAnswer({ questionId: question._id, index, data: {isRight: event.target.checked} })}
                          />
                          <Input
                            value={answer.title}
                            onChange={title => changeQuestionAnswer({ questionId: question._id, index, data: {title} })}
                            label={'Текст ответа'}
                          />
                          <Button onClick={() => deleteQuestionAnswer({ questionId: question._id, answerId: answer._id })}>
                            Удалить
                          </Button>
                        </div>
                      )
                    })}
                    
                    <Button  variant='contained' onClick={() => addQuestionAnswer({ questionId: question._id })}>
                      Добавить вариант ответа
                    </Button>
                  </div>}

                  <div>
                    
                  </div>

                  {/* <div>
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
                  </div> */}

                  {/* <div>
                    <div className={classname('Details-Upload')}>
                      {console.log('DATA', question)}
                      <Input
                        value={question.subtitlesUrlRu}
                        label={'Ответ 2'}
                        onChange={subtitlesUrlRu => onChange(id, { subtitlesUrlRu })}
                      />
                      
                    </div>

                    <div className={classname('Details-Upload')}>
                      <Input
                        value={question.subtitlesUrlEn}
                        label={'Ответ 3'}
                        onChange={subtitlesUrlEn => onChange(id, { subtitlesUrlEn })}
                      />
                      
                    </div>
                  </div> */}

                  {/* <div>
                    <div className={classname('Details-Upload')}>
                      <Input
                        value={question.questionUrl}
                        label={'Ссылка на видео'}
                        onChange={questionUrl => onChange(id, { questionUrl })}
                      />
                      
                    </div>
                  </div> */}

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