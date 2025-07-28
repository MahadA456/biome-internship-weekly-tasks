#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

// Utility function to parse CLI args like --age=30 --gender=female
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  args.forEach(arg => {
    const [key, value] = arg.split('=');
    if (key && value) {
      options[key.replace(/^--/, '')] = value.toLowerCase();
    }
  });
  return options;
}

// Filter users by age and/or gender
function filterUsers(users, filters) {
  return users.filter(user => {
    let ageMatch = true;
    let genderMatch = true;

    if (filters.age) {
      ageMatch = user.age === Number(filters.age);
    }
    if (filters.gender) {
      genderMatch = user.gender.toLowerCase() === filters.gender;
    }

    return ageMatch && genderMatch;
  });
}

async function main() {
  try {
    const filters = parseArgs();

    const filePath = path.resolve('users.json');
    const data = await fs.readFile(filePath, 'utf8');
    const users = JSON.parse(data);

    const filteredUsers = filterUsers(users, filters);

    const outputPath = path.resolve('filtered_users.json');
    await fs.writeFile(outputPath, JSON.stringify(filteredUsers, null, 2));

    console.log(`Filtered ${filteredUsers.length} users`);
    console.log(`Output written to ${outputPath}`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
