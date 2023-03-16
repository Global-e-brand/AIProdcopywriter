export const checkNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  console.log("Authenticated");
  res.redirect("http://localhost:3001/home");
};
