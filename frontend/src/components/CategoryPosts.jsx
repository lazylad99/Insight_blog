//Feeding Dummydata
import { DummyPosts } from "../data/data";

import { useState } from "react";
import PostsList from "./PostList";

export default function CategoryPosts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="categoryPosts">
      <h1 className="error-center">{`${posts[0]?.category} Blogs`} </h1>

      <PostsList posts={posts} cont_name="categoryPosts" />
    </section>
  );
}
