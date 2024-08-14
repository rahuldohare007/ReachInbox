import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchOneboxList = () => {
  return axios.get(`${API_BASE_URL}/onebox/list`);
};

export const fetchOneboxItem = (threadId) => {
  return axios.get(`${API_BASE_URL}/onebox/${threadId}`);
};

export const deleteOneboxItem = (threadId) => {
  return axios.delete(`${API_BASE_URL}/onebox/${threadId}`);
};

export const sendReply = (threadId, payload) => {
  return axios.post(`${API_BASE_URL}/reply/${threadId}`, payload);
};
