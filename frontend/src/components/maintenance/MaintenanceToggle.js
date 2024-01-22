// Import necessary modules
const fs = require("fs");
const path = require("path");

// Define the path to the config.json file
const configFilePath = path.join(__dirname, "setup.json");

// Read the content of the config.json file
const configContent = fs.readFileSync(configFilePath, "utf-8");
const config = JSON.parse(configContent);

// Step 1: Check the value of maintenanceMode
const maintenanceMode = config.maintenanceMode;

// Step 2: If maintenanceMode is true, append the value to false

if (maintenanceMode) {
  config.maintenanceMode = false;
  config.maintenanceTime = "";
  console.log(`Maintenance mode switched OFF.\nMaintenance time reset to "".`);
  // Step 3: If maintenanceMode is false, append the value to true and update maintenanceTime
} else {
  config.maintenanceMode = true;
  config.maintenanceTime = new Date().toISOString();
  console.log(
    `Maintenance mode switched ON.\nMaintenance time set as ${config.maintenanceTime}.`
  );
}

// Write the updated config back to the file
fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2), "utf-8");

// Log the final result
console.log(`Config file updated successfully.`);
