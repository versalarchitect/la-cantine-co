#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

// Paths
const rootComponentsDir = path.join(process.cwd(), 'components');
const srcComponentsDir = path.join(process.cwd(), 'src/components');

// Function to recursively get all files in a directory
function getAllFiles(dir, initialFileList = []) {
  const files = fs.readdirSync(dir);
  let fileList = [...initialFileList];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fileList = getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Get all component files from root components directory
const rootComponentFiles = getAllFiles(rootComponentsDir)
  .filter(file => !file.includes('.DS_Store')); // Exclude .DS_Store files

console.log(`Found ${rootComponentFiles.length} files in root components directory`);

// Process each file
for (const rootFile of rootComponentFiles) {
  // Get the relative path from the components directory
  const relativePath = path.relative(rootComponentsDir, rootFile);
  const srcFile = path.join(srcComponentsDir, relativePath);
  
  // Create the directory in src if it doesn't exist
  const srcDir = path.dirname(srcFile);
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
    console.log(`Created directory: ${srcDir}`);
  }
  
  // Check if the file exists in src
  if (fs.existsSync(srcFile)) {
    // Compare the files
    const rootContent = fs.readFileSync(rootFile, 'utf8');
    const srcContent = fs.readFileSync(srcFile, 'utf8');
    
    if (rootContent !== srcContent) {
      console.log(`Files differ: ${relativePath}`);
      
      // Create a backup of the src file
      const backupFile = `${srcFile}.bak`;
      fs.copyFileSync(srcFile, backupFile);
      console.log(`Created backup: ${backupFile}`);
      
      // Update the src file with the root content
      fs.writeFileSync(srcFile, rootContent);
      console.log(`Updated: ${srcFile}`);
    } else {
      console.log(`Files are identical: ${relativePath}`);
    }
  } else {
    // Copy the file to src
    fs.copyFileSync(rootFile, srcFile);
    console.log(`Copied: ${rootFile} -> ${srcFile}`);
  }
}

console.log('Component consolidation complete!'); 