export const verifyEmail = async (email) => {
  return await fetch("http://localhost:3000/auth/verify-email?email=" + email)
    .then(async (raw) => {
      const data = await raw.json();

      return !data.errors && data.data.status === "valid";
    })
    .catch((e) => {
      console.log("There was an issue with verifying the email: " + e);
      return false;
    });
};
