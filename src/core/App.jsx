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
  /* CRUD Operation - Create New Job */
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
  /* CRUD Operation - Delete Job using job-id*/
  const handleDeleteJob = async (id) => {
    console.log("Delete", id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  /* CRUD Operation - Editing / Updating Job using job-id*/
  const updateJobSubmit = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  /* JOB-LOADER */
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
          element={<EditJobPage updateJobSubmit={updateJobSubmit} />}
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
