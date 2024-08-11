import { useState, useEffect } from "react";
import { JOB_SALARIES, JOB_TYPES } from "../constants";
import { useLoaderData, useParams } from "react-router-dom";
export default function EditJobPage() {
  const { id } = useParams();
  const data = useLoaderData();

  const [job, setJob] = useState({
    title: data.title,
    type: data.type,
    location: data.location,
    description: data.description,
    salary: data.salary,
    name: data.company.name,
    companyDescription: data.company.description,
    contactEmail: data.company.contactEmail,
    contactPhone: data.company.contactPhone,
  });

  function handleJobSubmit(e) {
    e.preventDefault();
  }
  console.log(data);
  console.log(job);

  return (
    <section className="addJobContainer shadow-lg px-4 mb-10">
      <div>
        <h2 className="text-center font-secondary font-semibold">Edit Job</h2>
        <form className="font-secondary" onSubmit={handleJobSubmit}>
          {/* Job-Type */}
          <div className="my-3">
            <label htmlFor="job-type" className="font-semibold">
              Job Type
            </label>
            <div className="pt-1">
              <select
                name=""
                id=""
                className="w-full border-2 p-1"
                value={job.type}
                onClick={(e) => {
                  setJob({ ...job, type: e.target.value });
                }}
              >
                {JOB_TYPES.map((jobtype) => (
                  <option value={jobtype} key={jobtype}>
                    {jobtype}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Job Listing Name */}
          <div className="my-3">
            <label htmlFor="job-listing-name" className="font-semibold">
              Job Listing Name
            </label>
            <div className="py-1">
              <input
                type="text"
                className="w-full border-2 py-1 px-2"
                placeholder="Enter Job Listing Name"
                value={job.title}
                onChange={(e) => {
                  setJob({ ...job, title: e.target.value });
                }}
              />
            </div>
          </div>
          {/* Job-Description */}
          <div>
            <label htmlFor="job-description" className="font-semibold">
              Description
            </label>
            <div className="py-2">
              <textarea
                className="w-full h-40 border-2 p-2"
                value={job.description}
                placeholder="Add job duties, expections, requirements, etc"
                onChange={(e) => {
                  setJob({ ...job, description: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          {/* Job - Salaries */}
          <div className="py-1">
            <label htmlFor="job-salary" className="font-semibold">
              Salary
            </label>
            <div className="py-1">
              <select
                name=""
                id=""
                className="w-full border-2 p-1"
                value={job.salary}
                onClick={(e) => {
                  setJob({ ...job, salary: e.target.value });
                }}
              >
                {JOB_SALARIES.map((salary) => (
                  <option key={salary}>{salary}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Hiring Company Location */}
          <div>
            <label htmlFor="job-location">Location</label>
            <div className="py-2">
              <input
                type="text"
                value={job.location}
                className="w-full border-2  p-2"
                placeholder="Company location"
                onChange={(e) => {
                  setJob({ ...job, location: e.target.value });
                }}
              />
            </div>
          </div>
          {/* Company Information */}
          <h3 className="my-5 font-bold text-xl">Company Info</h3>

          {/* Company Name */}
          <div>
            <label htmlFor="job-company-name" className="font-semibold">
              Company Name
            </label>
            <div className="my-2">
              <input
                type="text"
                placeholder="Company Name"
                value={job.name}
                className="border-2 w-full p-2"
                onChange={(e) => {
                  setJob({ ...job, companyName: e.target.value });
                }}
              />
            </div>
          </div>
          {/* Company Description */}
          <div>
            <label
              htmlFor="job-company-description"
              className="block font-semibold pb-2"
            >
              Company Description
            </label>
            <textarea
              className="w-full h-40 border-2 p-2"
              placeholder="What does your company do?"
              value={job.companyDescription}
              onChange={(e) => {
                setJob({ ...job, companyDescription: e.target.value });
              }}
            ></textarea>
          </div>
          {/* Company Email */}
          <div className="mb-4">
            <label htmlFor="company-email" className="block font-semibold pb-1">
              Company Email
            </label>
            <input
              type="text"
              value={job.contactEmail}
              placeholder="Email address for applicants"
              className="w-full border-2 p-1"
              onChange={(e) => {
                setJob({ ...job, contactEmail: e.target.value });
              }}
            />
          </div>
          {/* Company Phone */}
          <div className="mb-4">
            <label htmlFor="company-phone" className="block font-semibold pb-1">
              Company Phone
            </label>
            <input
              type="text"
              placeholder="Optional phone for applicants"
              className="w-full border-2 p-1"
              value={job.contactPhone}
              onChange={(e) => {
                setJob({ ...job, contactPhone: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-end">
            <button className=" bg-orange-500 px-6 hover:opacity-[0.5] transition-all text-white py-3 mb-2 rounded-full">
              Edit Job
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
