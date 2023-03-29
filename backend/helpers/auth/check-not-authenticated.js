export const checkNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  console.log("Authenticated");
  let path = req.query.categorypath;
  if (path !== "") {
    res.redirect(`http://localhost:3001/home`);
  } else {
    res.redirect("http://localhost:3001/home");
  }
};
