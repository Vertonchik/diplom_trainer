import axios from './axios';

export const getTestsListRequest = () => axios.get(`/test/list`);
export const getTestRequest = (testId, userData = false) => axios.get('/test/byId', { params: {testId, userData} });

export const updateTestRequest = (data) => axios.put('/test/update', data);
export const createTestRequest = (data) => axios.post('/test/create', data);
export const deleteTestRequest = (testId) => axios.post('/test/delete', {testId});

export const updateQuestionRequest = (testId, data) => axios.put('/questions/update', {testId, data});
export const createQuestionRequest = (testId, data) => axios.post('/questions/create', {testId, data});