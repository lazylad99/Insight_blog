//Feeding Dummydata
import { DummyPosts } from "../data/data";

import { useState } from "react";
import PostsList from "../components/PostList";

export default function AuthorPosts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="authorPosts">
      <h1 className="error-center">Author Posts</h1>

      <PostsList posts={posts} cont_name="authorPosts" />
    </section>
  );
}
