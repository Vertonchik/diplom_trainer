import { actionTypes } from './actions';
import { v1 as uuid } from 'uuid';

const baseState = {
 list: {
   data: [],
   loading: false,
 },
 currentTest: {
  data: undefined,
  adminQuestions: undefined,
  questionsList: undefined,
  loading: false
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
      const id = uuid();

      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminQuestions: {
            ...state.currentTest.adminQuestions,
            [id]: {
              testId: action.payload,
              subtitlesUrlRu: undefined,
              subtitlesUrlEn: undefined,
              questionUrl: undefined,
              words: [],
              nameEn: '',
              nameTest: 'Новое видео',
              durationMin: 0,
              durationSec: 0,
              isNew: true,
            }
          },
          questionsList: [...state.currentTest.questionsList, id],
        }
      }
    }

    default: {
      return state
    }
  }
}