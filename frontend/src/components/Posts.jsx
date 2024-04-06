//Feeding Dummydata
import { DummyPosts } from "../data/data";

import { useState } from "react";
import Headpost from "./Headpost";
import PostsList from "./PostList";

export default function Posts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="posts">
      <div className="head-post-aria">
        <Headpost  />
      </div>

      <PostsList posts={posts} cont_name="posts" />
    </section>
  );
}
