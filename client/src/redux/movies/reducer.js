import { actionTypes } from './actions';
import { v1 as uuid } from 'uuid';

const baseState = {
 list: {
   data: [],
   loading: false,
 },
 currentMovie: {
  data: undefined,
  adminVideos: undefined,
  videosList: undefined,
  loading: false
 }
}

export const moviesReducer = (state = baseState, action) => {
  switch (action.type) {
    
    case actionTypes.SET_MOVIES_LIST: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.payload
        }
      }
    }

    case actionTypes.SET_CURRENT_MOVIE: {
      return {
        ...state,
        currentMovie: {
          ...state.currentMovie,
          ...action.payload
        }
      }
    }

    case actionTypes.CLEAR_CURRENT_MOVIE: {
      return {
        ...state,
        currentMovie: baseState.currentMovie
      }
    }

    case actionTypes.CHANGE_CURRENT_MOVIE: {
      return {
        ...state,
        currentMovie: {
          ...state.currentMovie,
          data: {
            ...state.currentMovie.data,
            ...action.payload,
          }
        }
      }
    }

    case actionTypes.CHANGE_MOVIE_VIDEO: {
      const { videoId, data } = action.payload;
      return {
        ...state,
        currentMovie: {
          ...state.currentMovie,
          adminVideos: {
            ...state.currentMovie.adminVideos,
            [videoId]: {
              ...state.currentMovie.adminVideos[videoId],
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
        currentMovie: {
          ...state.currentMovie,
          adminVideos: {
            ...state.currentMovie.adminVideos,
            [id]: {
              movieId: action.payload,
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
          videosList: [...state.currentMovie.videosList, id],
        }
      }
    }

    default: {
      return state
    }
  }
}