import { json } from "react-router-dom";

export async function verifyGuestUser(id) {
  console.log("called Verify User");
  let res = await fetch("/checkguest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  let data = await res.json();
  console.log("data", data);
  return data;
}
