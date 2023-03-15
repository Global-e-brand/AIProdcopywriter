import fetch from "node-fetch";

export const getEmailStatus = async (email) => {
  const apiKey = process.env.ZEROBOUNCE_API_KEY;

  return await fetch(
    `https://api.zerobounce.net/v2/validate?api_key=${apiKey}&email=${email}`
  )
    .then(async (response) => {
      const data = await response.json();

      return data?.status === "valid";
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
