function createError(status, data) {
  return {
    status: data[0].status,
    message: data[0].message,
    data: data[0].data,
    stack: new Error().stack,
    statusCode: status,
    code: data[0].code?data[0].code:status
  };
}

createError.InternalServerError = (data = null) =>
  createError(500, [
    {
      status: "Error",
      message: "Internal Server Error.",
      data,
      stack: process.env.NODE === "development" ? new Error().stack : undefined,
    },
  ]);

module.exports = createError;
