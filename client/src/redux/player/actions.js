export const actionTypes = {
  SET_PLAYER_OPEN: 'SET_PLAYER_OPEN',
  SET_PLAYER_VIDEO: 'SET_PLAYER_VIDEO',
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
export const setPlayerVideo = payload => ({
  type: actionTypes.SET_PLAYER_VIDEO,
  payload
})