import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import CertificatsPage from "./pages/CertificatsPage";
import ProjectsPage from "./pages/ProjectsPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certificats" element={<CertificatsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
