import React, { useEffect, useState } from 'react';
import { classname, rClassname, mapStateToProps, mapDispatchToProps } from './TestPage.index';
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
  currentQuestionId,
  changeCurrentTestQuestion
}) => {

  const [isFinish, setIsFinish] = useState(false);

  const { testId } = useParams();

  useEffect(() => {
    getCurrentTest({ testId });

    return () => {
      setIsFinish(false);
    }
  }, [])

  useEffect(() => {
    if (questionsIds?.length) setCurrentTest({ currentQuestionId: questionsIds[0] })
  }, [questionsIds?.length])


  const onButtonClick = (currentIndex, questionsLength) => {
    if (currentIndex === questionsLength - 1) {
      setIsFinish(true);
    } else {
      setCurrentTest({ currentQuestionId: questionsIds[++currentIndex]})
    }
  }

  if (loading || (!data && !currentQuestionId)) return <></>;


  const currentQuestion = data[currentQuestionId];
  const currentQuestionIndex = questionsIds.findIndex(id => id === currentQuestionId);

  // results info

  const totalQuestions = questionsIds.length;
  const rightQuestions = questionsIds.reduce((acc, id) => {
    const question = data[id];

    if (question.type === 'text') {
      return question.rightAnswer?.trim()?.toLowerCase() === question.userAnswer?.trim()?.toLowerCase() ? acc + 1 : acc;
    } else { // test
      return question.userAnswer === question?.answers.find(answer => answer.isRight)?._id ? acc + 1 : acc;
    }

  }, 0)

  

  if (!isFinish) return (
    <div className={classname()}>

      <div className={classname('Question')}>
        {currentQuestion.question}
      </div>

      <div className={classname('Question-Answers')}>
        {
          currentQuestion.type === 'test' ?
            <div>
              {
                currentQuestion.answers?.map(answer => (
                  <div className={classname('Question-Answer')}>
                    <FormControlLabel
                      control={<Checkbox checked={currentQuestion.userAnswer === answer._id} onChange={(e) => changeCurrentTestQuestion({ questionId: currentQuestionId, data: { userAnswer: answer._id } })} />}
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
                onChange={(userAnswer) => changeCurrentTestQuestion({ questionId: currentQuestionId, data: { userAnswer } })}
                value={currentQuestion.userAnswer}
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
  /// results
  else return (
    <div className={rClassname()}>
      <h1>Результаты</h1>

      <h3>{`Правильных ответов ${rightQuestions} из ${totalQuestions}`}</h3>


      <div className={rClassname('Progress')}>
        <div className={rClassname('Progress-Main')}></div>
        <div style={{ width: `${(rightQuestions / totalQuestions) * 100}%` }} className={rClassname('Progress-Right')}></div>
      </div>
    </div>
  )
}

export const TestPage = connect(mapStateToProps, mapDispatchToProps)(Component);