export const isEmailValid = async (email, host) => {
  return await fetch("https://" + host + "/email/verify-email?email=" + email)
    .then(async (raw) => {
      const data = await raw.json();

      return data;
    })
    .catch((e) => {
      console.log("There was an issue with verifying the email: " + e);
      return false;
    });
};
