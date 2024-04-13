// const asyncHandler = (fn) => (req, res, next) => {
//   fn(req, res, next).catch((err) => next(err));
// };

const asyncHandler = (fn) => (req, res, next) => {
  return Promise.resolve(fn(req, res, next)).catch((err) => {
    //this can handle both async and sync errors smoothly
    next(err);
  });
};

export { asyncHandler };

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ success: false, message: error.message });
//   }
// };
