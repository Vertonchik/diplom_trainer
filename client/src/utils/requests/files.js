import axios from './axios';

export const uploadFile = (formData) => axios.post(`/files/upload`, formData, { headers: { "Contetnt-Type": "multipart/form-data"}});