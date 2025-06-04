// setupRedirects.js
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");
const redirectsFile = path.join(publicDir, "_redirects");
const redirectsContent = "/*    /index.html   200\n";

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log("Created /public folder");
}

// Create _redirects file with SPA rule
fs.writeFileSync(redirectsFile, redirectsContent);
console.log("Created /public/_redirects file");
	