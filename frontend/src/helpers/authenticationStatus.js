export const authenticate = async (callback) => {
  await fetch("/auth/authentication-status")
    .then(async (data) => {
      const d = await data.json();

      callback(d.status);
    })
    .catch((e) => {
      console.log("Error getting the authentication status: " + e);
    });
};
