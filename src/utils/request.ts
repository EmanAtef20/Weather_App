import axios, {AxiosError, AxiosResponse} from 'axios';
import _ from 'lodash';
import {Platform, StatusBar} from 'react-native';

import {refreshToken} from '@/services';
import {getLocalStorage, setLocalStorage} from '@/src/storage';

import {setAccessToken} from '../config';


const parseErrorMessage = (data: any, status: string | number) => {
  const codeMessage = {
    401: 'The user does not have permission (the token, username, password is wrong).',
    500: 'An error occurred on the server, please check the server.',
    502: 'Gateway error.',
    503: 'The service is unavailable, and the server is temporarily overloaded or maintained.',
    504: 'The gateway timed out.',
  };
  const statusCode = _.get(data, 'statusCode', status);
  if (data?.error) {
    return data?.error;
  }
  const message = _.get(codeMessage, statusCode);
  if (message) {
    return message;
  }
  if (!Object.keys(codeMessage).includes(status.toString())) {
    return data;
  }
  return codeMessage['500'];
};
/**
 * Exception handler
 */
const errorHandler = async (error: AxiosError) => {
  // console.log(error, 'first render error');
  const response: AxiosResponse<any, any> | undefined = _.get(
    error,
    'response',
  );
  const {status, data} = response;

  if (error.response && __DEV__) {
  }
  if (!response) {
    // Show toast message
    return {isError: true};
  }

  return {
    isError: true,
    error: parseErrorMessage(data, status),
    feedback: data?.feedback,
  };
};
export const request = axios.create({
  headers: {
    Accept: 'application/json',
  },
});
request.interceptors.response.use(function (response) {
  if (response.data) {
    return response.data;
  }
  return response;
}, errorHandler);
request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
