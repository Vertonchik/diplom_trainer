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
  CHANGE_TEST_QUESTION: 'CHANGE_TEST_QUESTION',
  ADD_QUESTION_TO_LIST: 'ADD_QUESTION_TO_LIST',
  UPDATE_QUESTION: 'UPDATE_QUESTION',
  CREATE_QUESTION: 'CREATE_QUESTION',
  ADD_QUESTION_ANSWER: 'ADD_QUESTION_ANSWER',
  DELETE_QUESTION_ANSWER: 'DELETE_QUESTION_ANSWER',
  CHANGE_QUESTION_ANSWER: 'CHANGE_QUESTION_ANSWER',
  CHANGE_CURRENT_TEST_QUESTION: 'CHANGE_CURRENT_TEST_QUESTION',
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
* @param {object} payload {questionId}
*/
export const updateQuestion = payload => ({
  type: actionTypes.UPDATE_QUESTION,
  payload
})

/**
* @param {object} payload {questionId}
*/
export const createQuestion = payload => ({
  type: actionTypes.CREATE_QUESTION,
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
 * @param {} payload {questionId, data} 
 */
export const changeQuestion = payload => ({
  type: actionTypes.CHANGE_TEST_QUESTION,
  payload
})

/**
 * @param {string} payload id
 */
export const addQuestionToList = payload => ({
  type: actionTypes.ADD_QUESTION_TO_LIST,
  payload
})

/**
 * 
 * @param {} payload {quuestionId}
 */
export const addQuestionAnswer = payload => ({
  type: actionTypes.ADD_QUESTION_ANSWER,
  payload
})

/**
 * 
 * @param {*} payload {questionId, answerId}
 */
export const deleteQuestionAnswer = payload => ({
  type: actionTypes.DELETE_QUESTION_ANSWER,
  payload
})

/**
 * @param {*} payload {questionId, data, index}
 */
export const changeQuestionAnswer = payload => ({
  type: actionTypes.CHANGE_QUESTION_ANSWER,
  payload
})

export const changeCurrentTestQuestion = payload => ({
  type: actionTypes.CHANGE_CURRENT_TEST_QUESTION,
  payload
})