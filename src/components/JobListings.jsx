/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
export default function JobListings({ isHome }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function FetchJobs() {
      /*    const apiUrl = isHome ? "http://localhost:3000/jobs?_limit=3" : "http://localhost:3000/jobs"
       */ try {
        const url = "/api/jobs";
        const response = await fetch(url);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    FetchJobs();
  }, [jobs]);

  let AllJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="my-10">
      <p>{loading && "Loading..."}</p>
      <h1 className="font-secondary text-center font-bold text-2xl pb-10">
        {isHome ? "Recent Jobs" : "All Jobs"}
      </h1>
      <article className="gap-3 grid grid-cols-1 md:grid-cols-2 px-5 lg:p-0 lg:grid-cols-3">
        {AllJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </article>
    </section>
  );
}
