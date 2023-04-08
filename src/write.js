const { ConvexHttpClient } = require("convex/browser");

require("dotenv").config({
  // change this to ".env" to connect to the production database
  path: ".env.local",
});

// Change this to write different data to different tables
const data = { body: "Hello!", author: "me" };
const tableName = "messages";

const client = new ConvexHttpClient(process.env["VITE_CONVEX_URL"]);

async function saveData() {
  await client.mutation("writeArbitraryData")(tableName, data);
}

saveData();
