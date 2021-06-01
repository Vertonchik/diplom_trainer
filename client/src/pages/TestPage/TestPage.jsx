import React, { useEffect } from 'react';
import { classname, mapStateToProps, mapDispatchToProps } from './TestPage.index';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Input } from 'UI';
import './TestPage.scss';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Component = ({
  data,
  loading,
  questionsIds,
  getCurrentTest,
  setCurrentTest,
  currentQuestionId
}) => {

  const { testId } = useParams();

  useEffect(() => {
    getCurrentTest({ testId });
  }, [])

  useEffect(() => {
    if (questionsIds?.length) setCurrentTest({ currentQuestionId: questionsIds[0] })
  }, [questionsIds?.length])


  const onButtonClick = (currentIndex, questionsLength) => {
    if (currentIndex === questionsLength - 1) {
      /// 
    } else {
      setCurrentTest({ currentQuestionId: questionsIds[++currentIndex]})
    }
  }

  if (loading || (!data && !currentQuestionId)) return <></>;


  const currentQuestion = data[currentQuestionId];

  const currentQuestionIndex = questionsIds.findIndex(id => id === currentQuestionId);

  const text = 'У думаю ...'

  return (
    <div className={classname()}>

      <div className={classname('Question')}>
        {currentQuestion.question}
      </div>

      <div className={classname('Question-Answers')}>
        {
          currentQuestion.type === 'test' ?
            <div>
              {
                currentQuestion.answers.map(answer => (
                  <div className={classname('Question-Answer')}>
                    <FormControlLabel
                      control={<Checkbox checked={!!(Math.floor(Math.random() * 10) % 2)} onChange={() => {}} />}
                      label={answer.title}
                    />
                  </div>
                ))
              }
            </div> :
            <div>
              <Input
                label='Введите ответ'
                type='textarea'
                onChange={() => {}}
                value={text}
              />
            </div>
        }

        <Button variant='contained' onClick={() => onButtonClick(currentQuestionIndex, questionsIds.length)} >
          {currentQuestionIndex === questionsIds.length - 1 ? 'Завершить' : 'Ответить'}
        </Button>
      </div>

      <div className={classname('Nav')}>
        {questionsIds?.map((id, idx) => (
          <Button variant={currentQuestionId === id ? 'contained' : undefined} onClick={() => setCurrentTest({ currentQuestionId: id })}>
            {`Задание ${idx + 1}`}
          </Button>
        ))}
      </div>
    </div>
  )
}

export const TestPage = connect(mapStateToProps, mapDispatchToProps)(Component);