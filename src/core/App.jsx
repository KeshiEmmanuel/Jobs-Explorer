/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import JobsPage from "../pages/JobsPage";
import AddJobPage from "../pages/AddJobPage";
import NotFoundPage from "../pages/NotFoundPage";
import JobPage from "../pages/JobPage";
import EditJobPage from "../pages/EditJobPage";
import MainLayout from "../layouts/MainLayout";

export default function App() {
  const addJobSubmit = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const handleDeleteJob = async (id) => {
    console.log("Delete", id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJobSubmit} />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage handleDeleteJob={handleDeleteJob} />}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage />}
          loader={jobLoader}
        />
        {/* ... etc. */}
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
