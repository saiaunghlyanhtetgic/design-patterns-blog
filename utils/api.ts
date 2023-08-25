import postData from "./posts";

export function getAllPosts() {
    return postData.posts;
  }
  
  // Function to get a post by slug
export function getPostBySlug(slug : string) {
    const post = postData.posts.find(post => post.slug === slug);
    return post;
  }
  
