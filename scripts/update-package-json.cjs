const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "cypress": "cypress open",
  "cypress:run": "cypress run",
  "build:ci": "npm run lint && npm run test && npm run build",
  "sonar": "node scripts/run-sonar.js"
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('Package.json updated with testing and linting scripts');
