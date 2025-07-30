"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// 3. OOP — UserManager class
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    // Load users from file
    UserManager.prototype.loadUsers = function (filePath) {
        var data = fs.readFileSync(filePath, 'utf-8');
        this.users = JSON.parse(data);
        console.log('✅ Users loaded.');
    };
    // Save users to file
    UserManager.prototype.saveUsers = function (filePath) {
        fs.writeFileSync(filePath, JSON.stringify(this.users, null, 2));
        console.log('💾 Users saved to file.');
    };
    // List all users
    UserManager.prototype.listUsers = function () {
        console.log('\nCurrent Users:');
        this.users.forEach(function (user) {
            console.log("- ".concat(user.id, ": ").concat(user.name, " (").concat(user.role, ")"));
        });
    };
    // Update user role
    UserManager.prototype.updateRole = function (id, newRole) {
        var user = this.users.find(function (u) { return u.id === id; });
        if (!user) {
            console.log('❌ User not found.');
            return;
        }
        user.role = newRole;
        console.log("\uD83D\uDD01 Updated role of ".concat(user.name, " to \"").concat(newRole, "\""));
    };
    return UserManager;
}());
// 4. Functions with types
function showMenu() {
    console.log("\n=== User Manager CLI ===\n1. List Users\n2. Update User Role\n3. Save & Exit");
}
// Run the CLI
var manager = new UserManager();
var filePath = './users.json';
manager.loadUsers(filePath);
// Simple CLI using prompt-sync
var prompt = require('prompt-sync')();
var running = true;
while (running) {
    showMenu();
    var choice = prompt('Enter choice: ');
    switch (choice) {
        case '1':
            manager.listUsers();
            break;
        case '2':
            var id = Number(prompt('Enter user ID: '));
            var role = prompt('Enter new role (user/admin/moderator): ');
            if (['user', 'admin', 'moderator'].includes(role)) {
                manager.updateRole(id, role);
            }
            else {
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
