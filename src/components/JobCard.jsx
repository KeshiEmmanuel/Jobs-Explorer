/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "..";
  }
  return (
    <article className="bg-orange-50 pt-4 px-5 shadow">
      <h2 className="text-gray-500 font-semibold pb-3"> {job.type}</h2>
      <h1 className="text-xl font-bold pb-1">{job.title}</h1>
      <p className="text-gray-600 py-3">{description}</p>
      <p
        className="text-blue-300 underline pb-5"
        onClick={() => setShowFullDescription((prevState) => !prevState)}
      >
        {showFullDescription ? "Less" : "More"}
      </p>
      <p>{job.salary}</p>
      <div className="flex flex-col lg:flex-row justify-between px-2 py-5">
        <p className="pb-2 md:p-0">{job.location}</p>
        <Link to={`/jobs/${job.id}`}>
          <button className="bg-black text-white py-2 px-3 rounded-md">
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
}
