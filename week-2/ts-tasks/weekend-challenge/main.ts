import * as fs from 'fs';

// 1. Typing Basics — Define User interface
type Role = 'user' | 'admin' | 'moderator';

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

// 2. Utility type — for updating partial fields
type UpdateUser = Partial<User>;

// 3. OOP — UserManager class
class UserManager {
  private users: User[] = [];

  // Load users from file
  loadUsers(filePath: string): void {
    const data = fs.readFileSync(filePath, 'utf-8');
    this.users = JSON.parse(data);
    console.log('✅ Users loaded.');
  }

  // Save users to file
  saveUsers(filePath: string): void {
    fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2));
    console.log('💾 Users saved to file.');
  }

  // List all users
  listUsers(): void {
    console.log('\nCurrent Users:');
    this.users.forEach(user => {
      console.log(`- ${user.id}: ${user.name} (${user.role})`);
    });
  }

  // Update user role
  updateRole(id: number, newRole: Role): void {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      console.log('❌ User not found.');
      return;
    }
    user.role = newRole;
    console.log(`🔁 Updated role of ${user.name} to "${newRole}"`);
  }
}

// 4. Functions with types
function showMenu(): void {
  console.log(`\n=== User Manager CLI ===
1. List Users
2. Update User Role
3. Save & Exit`);
}

// Run the CLI
const manager = new UserManager();
const filePath = './users.json';
manager.loadUsers(filePath);

// Simple CLI using prompt-sync
const prompt = require('prompt-sync')();

let running = true;
while (running) {
  showMenu();
  const choice = prompt('Enter choice: ');

  switch (choice) {
    case '1':
      manager.listUsers();
      break;

    case '2':
      const id = Number(prompt('Enter user ID: '));
      const role = prompt('Enter new role (user/admin/moderator): ') as Role;
      if (['user', 'admin', 'moderator'].includes(role)) {
        manager.updateRole(id, role);
      } else {
        console.log('❌ Invalid role.');
      }
      break;

    case '3':
      manager.saveUsers(filePath);
      running = false;
      break;

    default:
      console.log('⚠️ Invalid option.');
  }
}
