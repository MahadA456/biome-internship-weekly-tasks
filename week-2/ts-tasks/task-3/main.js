"use strict";
// 4. Generic Repository class with CRUD methods
class Repository {
    constructor() {
        this.items = [];
    }
    // Create a new item
    create(item) {
        this.items.push(item);
        console.log("✅ Created:", item);
    }
    // Read all items
    read() {
        console.log("📄 All items:");
        return this.items;
    }
    // Update an item by ID
    update(id, updates) {
        const item = this.items.find(i => i.id === id);
        if (!item) {
            console.log("❌ Item not found with id:", id);
            return;
        }
        Object.assign(item, updates); // Apply partial updates
        console.log("✏️ Updated:", item);
    }
    // Delete an item by ID
    delete(id) {
        const index = this.items.findIndex(i => i.id === id);
        if (index === -1) {
            console.log("❌ Item not found with id:", id);
            return;
        }
        this.items.splice(index, 1);
        console.log("🗑️ Deleted item with id:", id);
    }
}
// 5. Create repository for BlogPost
const blogPosts = new Repository();
// 6. Example author
const author = {
    id: 1,
    name: "Ali Khan",
    bio: "Writes about coding"
};
// 7. Example blog posts
const post1 = {
    id: 1,
    title: "Learn TypeScript",
    content: "This post is about learning TypeScript...",
    published: true,
    author,
    tags: ["typescript", "coding"]
};
const post2 = {
    id: 2,
    title: "Advanced Topics",
    content: "Details about interfaces and types...",
    published: false,
    author
};
// 8. Use the repository
blogPosts.create(post1);
blogPosts.create(post2);
console.log(blogPosts.read()); // Show all
// 9. Update a post using Partial
const changes = {
    title: "UPDATED: Learn TypeScript",
    published: false
};
blogPosts.update(1, changes); // Update by ID
// 10. Delete a post
blogPosts.delete(2);
// 11. Show final result
console.log(blogPosts.read());
