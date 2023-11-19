import fs from "fs";
import path from "path";

const databasePath = path.resolve("data/database.json");
let database = JSON.parse(fs.readFileSync(databasePath, "utf-8"));

const incrementViewsCounter = () => {
  database.counters.views++;

  fs.writeFileSync(databasePath, JSON.stringify(database, null, 2));
};

const VisitCounter = () => {
  incrementViewsCounter();

  return null;
};

export default VisitCounter;
