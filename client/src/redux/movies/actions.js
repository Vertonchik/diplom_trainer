export const actionTypes = {
  GET_MOVIES_LIST: 'GET_MOVIES_LIST',
  SET_MOVIES_LIST: 'SET_MOVIES_LIST',
  GET_CURRENT_MOVIE: 'GET_CURRENT_MOVIE',
  SET_CURRENT_MOVIE: 'SET_CURRENT_MOVIE',
  CREATE_MOVIE: 'CREATE_MOVIE',
  UPDATE_MOVIE: 'UPDATE_MOVIE',
  DELETE_MOVIE: 'DELETE_MOVIE',
  CLEAR_CURRENT_MOVIE: 'CLEAR_CURRENT_MOVIE',
  CHANGE_CURRENT_MOVIE: 'CHANGE_CURRENT_MOVIE',
  CHANGE_MOVIE_VIDEO: 'CHANGE_MOVIE_VIDEO',
  ADD_VIDEO_TO_LIST: 'ADD_VIDEO_TO_LIST',
  UPDATE_VIDEO: 'UPDATE_VIDEO',
  CREATE_VIDEO: 'CREATE_VIDEO',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getMoviesList = () => ({
  type: actionTypes.GET_MOVIES_LIST
})

/**
 * @param {object} payload {movieId, userData = false}
 */
export const getCurrentMovie = payload => ({
  type: actionTypes.GET_CURRENT_MOVIE,
  payload
})

/**
 * @param {cb} payload  
 */
export const updateMovie = payload => ({
  type: actionTypes.UPDATE_MOVIE,
  payload
})

/**
 * @param {movieId} payload 
 */
export const deleteMovie = payload => ({
  type: actionTypes.DELETE_MOVIE, 
  payload
})

/**
 * @param {cb} payload  
 */
export const createMovie = payload => ({
  type: actionTypes.CREATE_MOVIE,
  payload
})

/**
* @param {object} payload {videoId}
*/
export const updateVideo = payload => ({
  type: actionTypes.UPDATE_VIDEO,
  payload
})

/**
* @param {object} payload {videoId}
*/
export const createVideo = payload => ({
  type: actionTypes.CREATE_VIDEO,
  payload
})


/********************************************
 ***************** TO REDUVER ***************
 *******************************************/

export const setMoviesList = payload => ({
  type: actionTypes.SET_MOVIES_LIST,
  payload
})

export const setCurrentMovie = payload => ({
  type: actionTypes.SET_CURRENT_MOVIE,
  payload
})

export const clearCurrentMovie = () => ({
  type: actionTypes.CLEAR_CURRENT_MOVIE,
})

export const changeCurrentMovie = payload => ({
  type: actionTypes.CHANGE_CURRENT_MOVIE,
  payload
})

/**
 * @param {} payload {videoId, data} 
 */
export const changeVideo = payload => ({
  type: actionTypes.CHANGE_MOVIE_VIDEO,
  payload
})

/**
 * @param {string} payload id
 */
export const addVideoToList = payload => ({
  type: actionTypes.ADD_VIDEO_TO_LIST,
  payload
})
