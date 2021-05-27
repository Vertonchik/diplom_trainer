export const actionTypes = {
  GET_TESTS_LIST: 'GET_TESTS_LIST',
  SET_TESTS_LIST: 'SET_TESTS_LIST',
  GET_CURRENT_TEST: 'GET_CURRENT_TEST',
  SET_CURRENT_TEST: 'SET_CURRENT_TEST',
  CREATE_TEST: 'CREATE_TEST',
  UPDATE_TEST: 'UPDATE_TEST',
  DELETE_TEST: 'DELETE_TEST',
  CLEAR_CURRENT_TEST: 'CLEAR_CURRENT_TEST',
  CHANGE_CURRENT_TEST: 'CHANGE_CURRENT_TEST',
  CHANGE_TEST_VIDEO: 'CHANGE_TEST_VIDEO',
  ADD_VIDEO_TO_LIST: 'ADD_VIDEO_TO_LIST',
  UPDATE_VIDEO: 'UPDATE_VIDEO',
  CREATE_VIDEO: 'CREATE_VIDEO',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

export const getTestsList = () => ({
  type: actionTypes.GET_TESTS_LIST
})

/**
 * @param {object} payload {testId, userData = false}
 */
export const getCurrentTest = payload => ({
  type: actionTypes.GET_CURRENT_TEST,
  payload
})

/**
 * @param {cb} payload  
 */
export const updateTest = payload => ({
  type: actionTypes.UPDATE_TEST,
  payload
})

/**
 * @param {testId} payload 
 */
export const deleteTest = payload => ({
  type: actionTypes.DELETE_TEST, 
  payload
})

/**
 * @param {cb} payload  
 */
export const createTest = payload => ({
  type: actionTypes.CREATE_TEST,
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

export const setTestsList = payload => ({
  type: actionTypes.SET_TESTS_LIST,
  payload
})

export const setCurrentTest = payload => ({
  type: actionTypes.SET_CURRENT_TEST,
  payload
})

export const clearCurrentTest = () => ({
  type: actionTypes.CLEAR_CURRENT_TEST,
})

export const changeCurrentTest = payload => ({
  type: actionTypes.CHANGE_CURRENT_TEST,
  payload
})

/**
 * @param {} payload {videoId, data} 
 */
export const changeVideo = payload => ({
  type: actionTypes.CHANGE_TEST_VIDEO,
  payload
})

/**
 * @param {string} payload id
 */
export const addVideoToList = payload => ({
  type: actionTypes.ADD_VIDEO_TO_LIST,
  payload
})
