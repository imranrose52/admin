class CustomErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    // Error.captureStackTrace(this, this.constructor);
  }

  static resourceNotFound(message) {
    return new CustomErrorHandler(409, message);
  }
  static alreadyExist(message) {
    return new CustomErrorHandler(409, message);
  }
  static wrongCredentials(message = "User name or password is wrong!") {
    return new CustomErrorHandler(401, message);
  }
  static unAuthorize(message = "unAuthorize ") {
    return new CustomErrorHandler(401, message);
  }
  static userExist(message = "User exist ! ") {
    return new CustomErrorHandler(401, message);
  }
  static notFound(message = "Not found 404 ") {
    return new CustomErrorHandler(404, message);
  }
  static sometingWorng(message = "Someting wrong! ") {
    return new CustomErrorHandler(404, message);
  }
  static unVerified(
    message = "unverified plese complete your KYC verification... "
  ) {
    return new CustomErrorHandler(404, message);
  }
}

export default CustomErrorHandler;
