// ./css/generateImports.js
const fs = require("fs");
const path = require("path");

const baseFolderPath = "./src/css"; // Replace with your folder path

// Step 1: Generate imports for each subfolder
const subfolders = fs
  .readdirSync(baseFolderPath, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name);

subfolders.forEach((subfolder) => {
  const subfolderPath = path.join(baseFolderPath, subfolder);
  const exportFilePath = path.join(subfolderPath, "_exports.module.css");

  // Read files in the subfolder
  const files = fs.readdirSync(subfolderPath);

  // Generate @import statements with correct paths
  const importStatements = files
    .filter(
      (file) => file.endsWith(".module.css") && file !== "_exports.module.css"
    )
    .map((file) => `@import url('./${file}');`)
    .join("\n");

  // Write import statements to the _exports.module.css file
  fs.writeFileSync(exportFilePath, importStatements);

  console.log(`@import statements generated and written to ${subfolder}.`);
});

// Step 2: Generate imports for the main exports file
const mainExportFilePath = path.join(baseFolderPath, "exports.module.css");
const mainImportStatements = subfolders
  .map((subfolder) => `@import url('${subfolder}/_exports.module.css');`)
  .join("\n");

// Write import statements to the main exports file
fs.writeFileSync(mainExportFilePath, mainImportStatements);

console.log(`@import statements for main exports file generated and written.`);
