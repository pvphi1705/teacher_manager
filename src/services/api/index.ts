import Config from 'react-native-config';
import axios from 'axios';
import _ from 'lodash';

import i18next from 'src/i18n';
import {apiLogger} from 'src/utils/logger';
import {getToken} from 'src/utils/store';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

const axiosClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (request: any) => {
  apiLogger(
    '%c Starting Request ',
    'background: #FFA813; color: #fff',
    request,
  );
  const authToken = getToken();
  if (authToken) {
    request.headers.common.Authorization = `Bearer ${authToken}`;
  }
  request.cancelToken = source.token;
  return request;
});

axiosClient.interceptors.response.use(
  response => {
    apiLogger('%c Response ', 'background: #69CA6D; color: #fff', response);
    const status = _.get(response, 'status', 200);
    if (status === 200) {
      return response;
    }
    return Promise.reject(response);
  },
  async (error: any) => {
    const response = _.get(error, 'response');
    apiLogger('%c Response ', 'background: #E41F00; color: #fff', response);
    const message = _.get(error, 'message');
    const status = _.get(response, 'status');
    if (error?.code === 'ECONNABORTED') {
      global.props.alert('', i18next.t('message.requestTimeout'));
      return Promise.reject(response);
    }
    if (!response && message === 'Network Error') {
      if (message === 'Network Error') {
        global.props.alert('', i18next.t('message.networkError'));
      }
      return Promise.reject(response);
    }
    if (status === 401) {
      // TODO: remove token
    }
    if (status === 500) {
      global.props.alert('', i18next.t('message.serverError'));
    }

    return Promise.reject(response);
  },
);

export const sendGet = async (url: string, params: any = {}) =>
  axiosClient.get(url, {params}).then(res => {
    return res?.data;
  });

export const sendPost = async (url: string, params?: any, config: any = {}) =>
  axiosClient.post(url, params, config).then(res => res?.data);

export const sendPut = async (url: string, params?: any, config: any = {}) =>
  axiosClient.put(url, params, config).then(res => res?.data);

export const sendDelete = async (url: string, params: any = {}) =>
  axiosClient.delete(url, {params}).then(res => res?.data);

export default {
  sendGet,
  sendPost,
  sendPut,
  sendDelete,
};
