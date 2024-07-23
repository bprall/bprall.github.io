import { Route, Routes } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./config/firebaseConfig";
import RenderSearch from "./components/search";
import RenderNavbar from "./components/navbar";
import RenderAbout from "./pages/about";
import RenderContact from "./pages/contact";
import RenderProjects from "./pages/projects";
import RenderFrontPage from "./pages/frontPage";
import RenderSourceCode from "./pages/sourceCode";
import RenderSignupPending from "./pages/signupPending";
import RenderProjectPage from "./pages/projectPage";
import RenderLogin from "./components/auth/login";
import RenderSignUp from "./components/auth/signup";
import { AuthProvider } from "./components/auth/auth";
import { RequireAuth } from "./components/auth/requireAuth";
import { ReactNode } from "react";

firebase.initializeApp(firebaseConfig);

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="wrapper">
      <RenderSearch />
      <RenderNavbar />
      {children}
    </div>
  );
};

function ProtectedRoute({ element }: { element: ReactNode }) {
  return (
    <RequireAuth>
      <div className="main-container">
        <RenderNavbar />
        {element}
      </div>
    </RequireAuth>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout><RenderFrontPage /></Layout>} />
        <Route path="/about" element={<Layout><RenderAbout /></Layout>} />
        <Route path="/login" element={<RenderLogin />} />
        <Route path="/signup" element={<RenderSignUp />} />
        <Route path="/signup-pending" element={<RenderSignupPending />} />
        <Route path="/contact" element={<Layout><RenderContact /></Layout>} />
        <Route path="/projects" element={<Layout><RenderProjects /></Layout>} />
        <Route path="/projects/:id" element={<Layout><RenderProjectPage /></Layout>} />
        <Route path="/source-code" element={<ProtectedRoute element={<RenderSourceCode />} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;