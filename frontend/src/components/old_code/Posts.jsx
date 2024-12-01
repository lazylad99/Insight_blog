//Feeding Dummydata
import { DummyPosts } from "../../data/data";

import { useState } from "react";
import Headpost from "./Headpost";
import PostsList from "./PostList";

export default function Posts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="mb-12">
      <Headpost />
    </div>

      <PostsList posts={posts} cont_name="posts" />
    </section>
  );
}
