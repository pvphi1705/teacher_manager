import _ from 'lodash';

export const handleErrorMessage = (error: any, setServerErrors?: any) => {
  const status = _.get(error, 'status');
  const errorMessage = error?.data?.message;
  if (error && status !== 401 && status !== 500 && status !== 422) {
    const message = errorMessage || 'Some error occurred!';
    global.props.alert('', message);
    return;
  }
  if (status === 422) {
    // show red error text in below the field
    if (setServerErrors) {
      const serverErrors = _.mapKeys(errorMessage, (v, k) => _.camelCase(k));
      setServerErrors(serverErrors);
      return;
    }
    // get first message in message object and show alert
    const message =
      errorMessage[Object.keys(errorMessage)[0]] || 'Some error occurred!';
    global.props.alert('', message);
  }
};

export const getErrorByField = (
  field: string,
  touched: any,
  errors: any,
  serverErrors: any,
) => {
  if (_.get(touched, field) && _.get(errors, field)) {
    return _.get(errors, field);
  }
  if (_.get(serverErrors, field)) {
    return _.get(serverErrors, field);
  }
  return '';
};

export const handleSuccessMessage = (res: any) => {
  const message = res?.message || 'Success!';
  global.props.showToast(message);
};
