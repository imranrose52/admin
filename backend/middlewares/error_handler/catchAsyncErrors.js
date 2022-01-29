export default (theFunction) => (req, res, next) => {
  Promise.resolve(theFunction(req, res, next)).catch(next);
};

//    to handle async function like   try catch block ---------
// export default catchAsyncErrors;
