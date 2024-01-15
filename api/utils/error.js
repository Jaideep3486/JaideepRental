export const errorHandler = (statusCode, message) => {
  // we are difining a custome status code and message
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
