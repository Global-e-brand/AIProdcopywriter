export const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  console.log("Not Authenticated");
  res.redirect("http://localhost:3001/login");
};
