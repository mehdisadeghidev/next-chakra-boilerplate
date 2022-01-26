import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    ContentType: 'application/json',
  },
});

const refresh = () => {
  Cookies.remove('authenticated');

  return http.post('/v1/auth/refresh').then(() => {
    Cookies.set('authenticated', '1', { expires: 30 });

    return Promise.resolve();
  });
};

createAuthRefreshInterceptor(http, refresh);

export default http;
