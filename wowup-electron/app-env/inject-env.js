const fs = require("node:fs");
const path = require("path");

if (process.env.BUILD_FLAVOR.length === 0) {
  throw new Error("BUILD_FLAVOR is required");
}

console.debug("injecting env", process.env.BUILD_FLAVOR);
const envPath = path.join(__dirname, "..", "app", "env", "environment.ts");

let envData = fs.readFileSync(envPath, "utf8");

envData = envData.replace(/buildFlavor: ".*"/, `buildFlavor: "${process.env.BUILD_FLAVOR}"`);

console.debug(envData);

fs.writeFileSync(envPath, envData);

const packagePath = path.join(__dirname, "..", "package.json");
let packageData = fs.readFileSync(packagePath, "utf8");
let packageJson = JSON.parse(packageData);

packageJson.name = "deeb-addon-emporium";
packageJson.productName = "DeebsAddonEmporium";
packageJson.repository.url = "https://github.com/deeb-addon-emporium/emporium-app.git";

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
