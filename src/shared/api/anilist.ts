import axios from 'axios';

export const anilistApi = axios.create({
  baseURL: 'https://graphql.anilist.co',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Интерцептор для обработки ошибок
anilistApi.interceptors.response.use(null, async error => {
  if (error.response?.status === 429) {
    await new Promise(resolve => setTimeout(resolve, 30000));
    return anilistApi.request(error.config);
  }
  return Promise.reject(error);
});