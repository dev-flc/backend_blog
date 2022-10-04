export const CONTENT_TYPE = {
  JSON: "application / json",
  APP_JS: "application/x-javascript",
  TEXT_JS: "text/javascript",
  TEXT_X_JS: "text/x-javascript",
  TEXT_X_JSON: "text/x-json",
}

export const SEND_STATUS = {
  200: {
    message: "Ok",
    code: 200,
  },
  400: {
    message: "Bad Request",
    code: 400,
  },
  403: {
    message: "Forbidden",
    code: 403,
  },
  404: {
    message: "Not Found",
    code: 404,
  },
  422: {
    message: "The data already exists!",
    code: 422,
  },
  500: {
    message: "Internal Server Error",
    code: 500,
  },
}
