import { actionTypes } from './actions';
// import { v1 as generateId } from 'generateId';
import { generateId } from 'utils/generateId';

const baseState = {
 list: {
   data: [],
   loading: false,
 },
 currentTest: {
  data: undefined,
  adminQuestions: undefined,
  questionsList: undefined,
  loading: false,
  cuurentQuestionId: undefined,
 }
}

export const testsReducer = (state = baseState, action) => {
  switch (action.type) {
    
    case actionTypes.SET_TESTS_LIST: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload
        }
      }
    }

    case actionTypes.SET_CURRENT_TEST: {
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          ...action.payload
        }
      }
    }

    case actionTypes.CLEAR_CURRENT_TEST: {
      return {
        ...state,
        currentTest: baseState.currentTest
      }
    }

    case actionTypes.CHANGE_CURRENT_TEST: {
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          data: {
            ...state.currentTest.data,
            ...action.payload,
          }
        }
      }
    }

    case actionTypes.CHANGE_TEST_QUESTION: {
      const { questionId, data } = action.payload;
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [questionId]: {
              ...state.currentTest.adminQuestions[questionId],
              ...data
            }
          }
        }
      }
    }

    case actionTypes.ADD_QUESTION_TO_LIST: {
      const id = generateId();

      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [id]: {
              _id: id,
              testId: action.payload,
              type: 'test',
              question: '',
              answers: [],
              isNew: true,
              expanded: id,
            }
          },
          questionsList:state.currentTest.questionsList?[...state.currentTest.questionsList, id]:[id],
        }
      }
    }

    case actionTypes.ADD_QUESTION_ANSWER: {

      const { questionId } = action.payload;
      const id = generateId();

      const newAnswer = {
        _id: id,
        questionId,
        title: '',
        isRight: false,
      }
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [questionId]: {
              ...state.currentTest.adminQuestions[questionId],
              answers: state.currentTest.adminQuestions[questionId]?.answers ? [
                ...state.currentTest.adminQuestions[questionId]?.answers,
                newAnswer
              ] : [newAnswer]
            }
          }
        }
      }
    }

    case actionTypes.DELETE_QUESTION_ANSWER: {
      const { questionId, answerId } = action.payload;
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [questionId]: {
              ...state.currentTest.adminQuestions[questionId],
              answers: state.currentTest.adminQuestions[questionId].answers.filter(answer => answer._id !== answerId)
            }
          }
        }
      }
    }

    case actionTypes.CHANGE_QUESTION_ANSWER: {
      const {questionId, data, index} = action.payload;
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [questionId]: {
              ...state.currentTest.adminQuestions[questionId],
              answers: [
                ...state.currentTest.adminQuestions[questionId].answers.slice(0, index),
                { ...state.currentTest.adminQuestions[questionId].answers[index], ...data },
                ...state.currentTest.adminQuestions[questionId].answers.slice(index + 1)
              ]
            }
          }
        }
      }
    }


    case actionTypes.CHANGE_CURRENT_TEST_QUESTION: {
      const {questionId, data} = action.payload;
      return { 
        ...state,
        currentTest: {
          ...state.currentTest,
          questions: {
            ...state.currentTest.questions,
            [questionId]: {
              ...state.currentTest.questions[questionId],
              ...data
            }
          }
        }
      }
    }

    default: {
      return state
    }
  }
}