// 3. Function to display post info (typed parameter, void return)
function printPost(post) {
    console.log("Title:", post.title);
    console.log("Author:", post.author.name);
    // Check if author has bio (optional property)
    if (post.author.bio) {
        console.log("Bio:", post.author.bio);
    }
    console.log("Published:", post.published ? "Yes" : "No");
    // Check if tags exist
    if (post.tags) {
        console.log("Tags:", post.tags.join(", "));
    }
    console.log("Content:", post.content);
    console.log("----------");
}
// 4. Function to simulate creating a blog post
function createPost(post) {
    console.log("Creating a blog post...");
    printPost(post);
    return post; // return type is BlogPost
}
// 5. Sample author object (following Author interface)
var postAuthor = {
    id: 1,
    name: "Ali Khan",
    bio: "Web developer and writer"
};
// 6. Sample blog post object
var myBlogPost = {
    id: 100,
    title: "Introduction to TypeScript",
    content: "TypeScript helps you write safer JavaScript...",
    published: true,
    author: postAuthor,
    tags: ["typescript", "basics"]
};
// 7. Run the createPost function
createPost(myBlogPost);
