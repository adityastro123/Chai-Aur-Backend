class ApiResponse {
  constructor(statusCode, data, message = "") {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = statusCode < 400;
  }
}
export { ApiResponse };
