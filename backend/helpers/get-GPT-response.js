import fetch from "node-fetch";
const getGPTResponse = async (prompt) => {
  console.log("Prompt: " + prompt);

  if (prompt == "") {
    console.log(
      "One or more fields are empty, or that category has not yet been implemented!"
    );
    return;
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
      Authorization:
        "Bearer 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",
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
  console.log(respond);

  return respond.choices;
  //   res.send("");
};

export default getGPTResponse;