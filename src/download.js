const { ConvexHttpClient } = require("convex/browser");

require("dotenv").config({
  // change this to ".env" to connect to the production database
  path: ".env.local",
});

const client = new ConvexHttpClient(process.env["VITE_CONVEX_URL"]);

async function getMessages() {
  const results = await client.query("listMessages")();
  console.log(results);
}

getMessages();
