export const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTRATION: 'REGISTRATION',
  SET_AUTH: 'SET_AUTH',
  INIT_USER: 'INIT_USER',
  SET_AUTH_DATA: 'SET_AUTH_DATA',
  CHNAGE_AUTH_DATA: 'CHNAGE_AUTH_DATA',
  CLEAR_AUTH_DATA: 'CLEAR_AUTH_DATA',
  LOGOUT: 'LOGOUT',
}

/********************************************
 ******************* TO SAGA ****************
 *******************************************/

 export const login = () => ({
   type: actionTypes.LOGIN,
 })

 export const registration = () => ({
   type: actionTypes.REGISTRATION,
 })

 export const initUser = payload => ({
   type: actionTypes.INIT_USER,
   payload
 })

 export const logout = () => ({
   type: actionTypes.LOGOUT
 })

/********************************************
 ***************** TO REDUCER ***************
 *******************************************/

export const setAuthData = payload => ({
  type: actionTypes.SET_AUTH_DATA,
  payload
})

export const changeAuthData = payload => ({
  type: actionTypes.CHNAGE_AUTH_DATA,
  payload
})

export const clearAuthData = () => ({
  type: actionTypes.CLEAR_AUTH_DATA,
})

/**
 * @param {user, token, isAuth} payload 
 */
export const setAuth = payload => ({
  type: actionTypes.SET_AUTH,
  payload
})
