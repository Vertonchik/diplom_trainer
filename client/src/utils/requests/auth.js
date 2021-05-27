import axios from './axios';

export const loginRequest = (userData) => axios.post(`/login`, userData);
export const registrationRequest = (userData) => axios.post('/register', userData);
export const activationRequest = (email, code) => axios.post('/activation', { email, code });


export const googleAuthRequest = (idToken) => axios.post('/googlelogin', {idToken});
export const facebookAuthRequest = (userID, accessToken) => axios.post('/facebooklogin', {userID, accessToken});