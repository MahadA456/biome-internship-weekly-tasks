// main.js

import { User } from './user.js';
import { Admin } from './admin.js';

const user1 = new User('john_doe', 'john@example.com', 'pass123');
console.log(user1.getDetails()); // User: john_doe (john@example.com)
console.log('Password correct?', user1.checkPassword('pass123')); // true

const admin1 = new Admin('admin_anna', 'anna@admin.com', 'adminpass', 'ADM001');
console.log(admin1.getAdminDetails()); // User: admin_anna (anna@admin.com) - Admin Code: ADM001
console.log('Admin password + code correct?', admin1.checkPassword('adminpass', 'ADM001')); // true
console.log('Admin password + wrong code?', admin1.checkPassword('adminpass', 'WRONG')); // false
