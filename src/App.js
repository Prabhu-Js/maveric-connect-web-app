import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import PostListsPage from "./pages/PostListsPage";
import PostDetailsPage from "./pages/PostDetailsPage";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/postList" element={<PostListsPage />}></Route>
          <Route path="/postDetail/:id" element={<PostDetailsPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
