/* eslint-disable no-console */
export const logger = (msg: string, params?: any) => {
  if (__DEV__) {
    console.log(msg, params);
  }
};

export const apiLogger = (msg: string, color: string, params: any) => {
  if (__DEV__) {
    console.log(msg, color, params);
  }
};
