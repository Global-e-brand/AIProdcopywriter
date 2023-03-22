import fetch from "node-fetch";
const getGPTResponse = async (prompt) => {
  if (prompt == "") {
    return [
      {
        text: `One or more fields are empty.`,
      },
    ];
  }

  var raw = JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.73,
    max_tokens: 280,
    n: 5,
    top_p: 1,
    frequency_penalty: 0.91,
    presence_penalty: 0.78,
  });

  var requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.OPEN_AI_KEY,
      "Content-Type": "application/json",
    },
    body: raw,
    redirect: "follow",
  };
  var data_value = await fetch(
    "https://api.openai.com/v1/completions",
    requestOptions
  );
  let respond = await data_value.json();

  return respond.choices;
  //   res.send("");
};

export default getGPTResponse;
