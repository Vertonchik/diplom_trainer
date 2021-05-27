import axios from './axios';

export const getMoviesListRequest = () => axios.get(`/movie/list`);
export const getMovieRequest = (movieId, userData = false) => axios.get('/movie/byId', { params: {movieId, userData} });

export const updateMovieRequest = (data) => axios.put('/movie/update', data);
export const createMovieRequest = (data) => axios.post('/movie/create', data);
export const deleteMovieRequest = (movieId) => axios.post('/movie/delete', {movieId});

export const updateVideoRequest = (movieId, data) => axios.put('/videos/update', {movieId, data});
export const createVideoRequest = (movieId, data) => axios.post('/videos/create', {movieId, data});