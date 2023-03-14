import fetch from "node-fetch";

export const verifyEmail = async (email) => {
  return await fetch(
    `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=49056e12eb363cfdce598e3d4397e4d3f8d06eba`
  )
    .then(async (response) => {
      const data = await response.json();

      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
