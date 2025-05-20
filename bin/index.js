#!/usr/bin/env node

import { migrations } from "../cli/migrations.js";

const args = process.argv.slice(2);

const list = () => {
  Object.entries(migrations).forEach((migration, index) => {
    console.log(`${index + 1}. ${migration[0]}`);
  });
};

if (args?.length === 0 || args?.includes("--help")) {
  console.log("Help text here");
} else if (args?.[0] === "list") {
  list();
} else if (args?.[0] === "run" && args?.[1]?.length && args?.[2]?.length) {
  if (args[1] in migrations) {
    migrations[args[1]].run(args[2]);
  }
}
