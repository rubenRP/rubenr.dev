require("dotenv").config();
// eslint-disable-next-line import/no-extraneous-dependencies
const fetch = require("node-fetch");

const { BUTTONDOWN_TOKEN } = process.env;
exports.handler = async (event) => {
  const { email } = JSON.parse(event.body).payload;
  // eslint-disable-next-line no-console
  console.log(`Recieved a submission: ${email}`);
  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  })
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log(`Submitted to Buttondown:\n ${data}`);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
