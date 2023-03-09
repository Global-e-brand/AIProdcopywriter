export const authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};
