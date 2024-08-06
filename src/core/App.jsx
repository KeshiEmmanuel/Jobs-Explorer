import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import JobsPage from "../pages/JobsPage";
import AddJobPage from "../pages/AddJobPage";
import NotFoundPage from "../pages/NotFoundPage";
import JobPage from "../pages/JobPage";

export default function App() {
  return (
    <main className="max-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jobs/:id" element={<JobPage />} />
      </Routes>
    </main>
  );
}
