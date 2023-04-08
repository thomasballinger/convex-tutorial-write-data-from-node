import { mutation } from "./_generated/server";

export default mutation(async ({ db }, tableName, data) => {
  await db.insert(tableName, data);
});
