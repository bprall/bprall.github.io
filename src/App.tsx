import { Route, Routes } from "react-router-dom";
import { ReactNode } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./config/firebaseConfig";
import RenderSearch from "./components/search";
import RenderNavbar from "./components/navbar";
import RenderAbout  from "./pages/about";
import RenderContact from "./pages/contact";
import RenderProjects from "./pages/projects";
import RenderFrontPage from "./pages/frontPage";
import RenderProjectPage from "./pages/projectPage";

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

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout><RenderFrontPage /></Layout>} />
      <Route path="/about" element={<Layout><RenderAbout /></Layout>} />
      <Route path="/contact" element={<Layout><RenderContact /></Layout>} />
      <Route path="/projects" element={<Layout><RenderProjects /></Layout>} />
      <Route path="/projects/:id" element={<Layout><RenderProjectPage /></Layout>} />
    </Routes>
  );
}

export default App;