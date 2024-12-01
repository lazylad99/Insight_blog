//Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Pages
import Home from "./pages/Home";
import CategoryPosts from "../components/CategoryPosts";
import DeletePost from "../components/DeletePost";
import EditPost from "./pages/EditPost";
import CreatePosts from "./pages/CreatePosts";
import Dashboard from "./pages/Dashboard";
import AuthorPosts from "./pages/AuthorPosts";
import PostDetail from "./pages/PostDetail";
import Authors from "./pages/Authors";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/user/:id" element={<AuthorPosts />} />
          <Route path="/posts/categories/:category" element={<CategoryPosts />}/>
          <Route path="/create" element={<CreatePosts />} />
          <Route path="/myposts/:id" element={<Dashboard />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/post/:id/delete" element={<DeletePost />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
