import { useState } from "react";

//importing ReactQuill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbImage, setThumbImage] = useState("");

  //post cateories
  const postCategories = [
    "Agriculture",
    "Art",
    "Business",
    "Education",
    "Entertainment",
    "Fashion",
    "Food",
    "Music",
    "Science",
    "Sports",
    "Technology",
    "Weather",
    "Other",
  ];

  //Modules.....
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "+1" },
        { indent: "-1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };


  //Formats.....
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];

  return (
    <section className="editPosts">
      <div className="container form-container editPosts-conatiner">
        <h2>Edit Post</h2>
        <form action="" className="form editPosts-form">
          <p className="form-message">This is invalid mesage.</p>

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">--Choose a category--</option>
            {postCategories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>


          {/* React Quill */}
          <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)} />

          <input
            type="file"
            name="thumbnail"
            placeholder="Thumbnail"
            value={thumbImage}
            onChange={(e) => setThumbImage(e.target.value)}
            accept="png, jpg, jpeg"
          />

          <button className="btn btn-primary">Edit Post</button>
        </form>
      </div>
    </section>
  );
}
