export const actionTypes = {
  SET_PLAYER_OPEN: 'SET_PLAYER_OPEN',
  SET_PLAYER_QUESTION: 'SET_PLAYER_QUESTION',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/



/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

/**
 * @param {boolean} payload open
 */
export const setPlayerOpen = payload => ({
  type: actionTypes.SET_PLAYER_OPEN,
  payload
})

/**
 * @param {*} payload 
 */
export const setPlayerQuestion = payload => ({
  type: actionTypes.SET_PLAYER_QUESTION,
  payload
})