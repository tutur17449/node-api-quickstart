const sendApiSuccessResponse = (res, status, data, message) => {
  res.status(status).send({
    ok: true,
    status: status,
    message: message,
    error: null,
    data: data,
  });
};

const sendApiErrorResponse = (res, status, err, message) => {
  res.status(status).json({
    ok: false,
    status: status,
    message: message,
    error: err,
    data: null,
  });
};

const sendBodyError = (res, status, message) => {
  res.status(status).json({
    ok: false,
    status: status,
    message: message,
    err: null,
    data: null,
  });
};

const sendFieldsError = (res, status, message, miss, extra) => {
  res.status(status).json({
    ok: false,
    status: status,
    message: message,
    err: { miss, extra },
    data: null,
  });
};

module.exports = {
  sendApiErrorResponse,
  sendApiSuccessResponse,
  sendBodyError,
  sendFieldsError,
};
