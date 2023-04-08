const { ConvexHttpClient } = require("convex/browser");

require("dotenv").config({
  // change this to ".env" to connect to the production database
  path: ".env.local",
});

const client = new ConvexHttpClient(process.env["VITE_CONVEX_URL"]);

async function getAllMessagesPaginated() {
  let continueCursor = undefined;
  let isDone = false;
  let page;

  const results = [];

  while (!isDone) {
    ({ continueCursor, isDone, page } = await client.query(
      "listMessagesPaginated"
    )({ numItems: 5, cursor: continueCursor }));
    console.log("got", page.length);
    results.push(...page);
  }

  console.log(results);
}

getAllMessagesPaginated();
