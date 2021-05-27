import axios from './axios';

export const getTestsListRequest = () => axios.get(`/test/list`);
export const getTestRequest = (testId, userData = false) => axios.get('/test/byId', { params: {testId, userData} });

export const updateTestRequest = (data) => axios.put('/test/update', data);
export const createTestRequest = (data) => axios.post('/test/create', data);
export const deleteTestRequest = (testId) => axios.post('/test/delete', {testId});

export const updateVideoRequest = (testId, data) => axios.put('/videos/update', {testId, data});
export const createVideoRequest = (testId, data) => axios.post('/videos/create', {testId, data});