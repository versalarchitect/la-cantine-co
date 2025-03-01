#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

// Paths
const srcDir = path.join(process.cwd(), 'src');
const appDir = path.join(process.cwd(), 'app');

// Function to recursively get all files in a directory
function getAllFiles(dir, initialFileList = []) {
  if (!fs.existsSync(dir)) return initialFileList;
  
  const files = fs.readdirSync(dir);
  let fileList = [...initialFileList];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Get all TypeScript files
const tsFiles = [
  ...getAllFiles(srcDir),
  ...getAllFiles(appDir)
];

console.log(`Found ${tsFiles.length} TypeScript files to check`);

// Regular expression to match imports from components directory
const importRegex = /from\s+['"](.+\/components\/[^'"]+)['"]/g;

// Process each file
let updatedFiles = 0;

for (const file of tsFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let updatedContent = content;
  
  // Replace imports from components/ with @/components/
  updatedContent = updatedContent.replace(
    /from\s+['"]components\//g,
    'from "@/components/'
  );
  
  // Replace imports from ../components/ with @/components/
  updatedContent = updatedContent.replace(
    /from\s+['"]\.\.\/components\//g,
    'from "@/components/'
  );
  
  // Replace imports from ../../components/ with @/components/
  updatedContent = updatedContent.replace(
    /from\s+['"]\.\.\/\.\.\/components\//g,
    'from "@/components/'
  );
  
  // Replace imports from ../../../components/ with @/components/
  updatedContent = updatedContent.replace(
    /from\s+['"]\.\.\/\.\.\/\.\.\/components\//g,
    'from "@/components/'
  );
  
  if (updatedContent !== content) {
    fs.writeFileSync(file, updatedContent);
    console.log(`Updated imports in: ${file}`);
    updatedFiles++;
  }
}

console.log(`Updated imports in ${updatedFiles} files`);
console.log('Import update complete!'); 