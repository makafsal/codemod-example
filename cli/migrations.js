import { run } from "../codemods/jscodeshift.js";

export const migrations = {
  "button-migration": {
    name: "button-migration",
    description: "Migrate button from ui-lib to ui-core",
    run: function (path, options) {
      run("button-migration.cjs", path, options);
    }
  }
};
