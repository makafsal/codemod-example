import { execSync } from "child_process"
// import fs from "node:fs"
import path from 'node:path';
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const run = (transformFile, targetPath, options) => {
  const transformPath = path.resolve(__dirname, "transforms", transformFile);

  try {
    execSync(
      `npx jscodeshift -t ${transformPath} ${targetPath}`,
      {
        stdio: "inherit"
      }
    );
  } catch (error) {
    console.error("Error running jscodeshift:", error);
    process.exit(1);
  }
};
