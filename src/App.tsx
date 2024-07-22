import { Route, Routes } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./config/firebaseConfig";
import RenderAlert from "./components/alert";
import RenderNavbar from "./components/navbar";
import RenderAbout from "./pages/about";
import RenderContact from "./pages/contact";
import RenderProjects from "./pages/projects";
import RenderPortfolio from "./pages/portfolio";
import RenderFrontPage from "./pages/frontPage";
import RenderSourceCode from "./pages/sourceCode";
import RenderProjectPage from "./pages/projectPage";
import RenderLogin from "./components/auth/login";
import RenderSignUp from "./components/auth/signup";
import { AuthProvider } from "./components/auth/auth";
import { RequireAuth } from "./components/auth/requireAuth";
import { ReactNode } from "react";

firebase.initializeApp(firebaseConfig);

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
        <Route
          path="/"
          element={
            <div className="wrapper">
              <RenderAlert />
              <RenderNavbar />
              <RenderFrontPage />
            </div>
          }
        />
        <Route path="/about" element={<RenderAbout />} />
        <Route path="/login" element={<RenderLogin />} />
        <Route path="/signup" element={<RenderSignUp />} />
        <Route path="/contact" element={<RenderContact />} />
        <Route path="/projects" element={<RenderProjects />} />
        <Route path="/portfolio" element={<RenderPortfolio />} />
        <Route path="/projects/:id" element={<RenderProjectPage />} />
        <Route path="/source-code" element={<ProtectedRoute element={<RenderSourceCode />} />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;