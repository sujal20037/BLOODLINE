export const errorHandler = (err, req, res, next) => {
    console.error("Error:", err);
  
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
  
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      status: err.status,
      message: err.message || "Internal Server Error",
    });
  };
  
