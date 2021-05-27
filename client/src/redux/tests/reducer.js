import { actionTypes } from './actions';
import { v1 as uuid } from 'uuid';

const baseState = {
 list: {
   data: [],
   loading: false,
 },
 currentTest: {
  data: undefined,
  adminVideos: undefined,
  videosList: undefined,
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

    case actionTypes.CHANGE_TEST_VIDEO: {
      const { videoId, data } = action.payload;
      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminVideos: {
            ...state.currentTest.adminVideos,
            [videoId]: {
              ...state.currentTest.adminVideos[videoId],
              ...data
            }
          }
        }
      }
    }

    case actionTypes.ADD_VIDEO_TO_LIST: {
      const id = uuid();

      return {
        ...state,
        currentTest: {
          ...state.currentTest,
          adminVideos: {
            ...state.currentTest.adminVideos,
            [id]: {
              testId: action.payload,
              subtitlesUrlRu: undefined,
              subtitlesUrlEn: undefined,
              videoUrl: undefined,
              words: [],
              nameEn: '',
              nameRu: 'Новое видео',
              durationMin: 0,
              durationSec: 0,
              isNew: true,
            }
          },
          videosList: [...state.currentTest.videosList, id],
        }
      }
    }

    default: {
      return state
    }
  }
}