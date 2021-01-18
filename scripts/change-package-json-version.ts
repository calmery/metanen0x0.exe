import * as fs from "fs";
import * as path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("../package.json");
packageJson.version = process.argv[2];

fs.writeFileSync(
  path.resolve(__dirname, "../package.json"),
  JSON.stringify(packageJson, null, 2)
);
