export const isEmailValid = async (email) => {
  return await fetch("http://localhost:3000/email/verify-email?email=" + email)
    .then(async (raw) => {
      const data = await raw.json();

      return data;
    })
    .catch((e) => {
      console.log("There was an issue with verifying the email: " + e);
      return false;
    });
};
