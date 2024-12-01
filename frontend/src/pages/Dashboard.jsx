//Dummy-posts-Data
import { useState } from "react"
import {DummyPosts} from "../data/data"
import { Link } from "react-router-dom"

export default function Dashboard() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className='dashboard'>
    {posts.length > 0 ? <div className="container dashboard-container">
   {posts.map(({ id, Image, category, authorId, title, des }, index) => {
    return <article key={index} className="dashboard-post">
        <div className="dashboard-post-info">
            <div className="dashboard-post-info">
                <img src={Image} alt="" />
            </div>
            <h5>{title}</h5>
        </div>
        <div className="dashboard-posts-action">
            <Link to={`/posts/${authorId}`} className="btn btn-V btn-sm btn-sm">View</Link>
            <Link to={`/post/${id}/edit`} className="btn btn-sm btn-primary">Edit</Link>
            <Link to={`/post/${id}/delete`} className="btn btn-sm btn-danger">Delete</Link>
        </div>

    </article>
   })}
   </div> : <h2 className="error-center">You have not any posts.</h2>     }
    </section>
  )
}
