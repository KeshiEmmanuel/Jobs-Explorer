import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const JobPage = () => {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function FetchJob() {
      try {
        const url = `/api/jobs/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setJob(data);
        console.log();
      } catch (error) {
        console.log("Error while Fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    FetchJob();
  }, [id]);
  console.log(job);
  return (
    <section className="mt-4 lg:m-0">
      <p>{loading && "Loading"}</p>
      {/* navigation */}
      <div></div>
      <div className="flex flex-1 items-center xl:items-start xl:mt-[60px] flex-col gap-10 xl:flex-row xl:gap-5 xl:px-10">
        {/* Main-content */}
        <div className="flex flex-col gap-10">
          <div className="text-center xl:text-left">
            <p className="text-gray-700 font-primary">{job?.type}</p>
            <h1 className="py-2 text-3xl xl:text-4xl font-secondary font-semibold">
              {job?.title}
            </h1>
            <p className="text-red-600 font-primary">{job?.location}</p>
          </div>
          <div className="text-center xl:text-left pt-3 lg:p-0">
            <h3 className="text-orange-600 text-xl font-secondary font-semibold">
              Job Description
            </h3>
            <p className="mt-3 font-primary px-10 text-lg xl:p-0">
              {job?.description}
            </p>
            <h3 className="pt-7 text-[18px] xl:pt-3 font-semibold font-secondary">
              Salary
            </h3>
            <p className="font-primary xl:pt-2">{job?.salary} / Years</p>
          </div>
        </div>
        {/* Right-Sidebar */}
        <div className="flex flex-col items-center xl:w-[35%] gap-10">
          {/* Hiring Company */}
          <div className="text-center xl:text-left xl:shadow-lg py-4 px-5">
            <h4 className="text-xl font-primary font-bold pb-2">
              Company Info
            </h4>
            <h2 className="font-secondary text-xl font-semibold">
              {job?.company?.name}
            </h2>
            <p className="font-primary py-2 px-5 text-lg xl:px-0 xl:py-3">
              {job?.company?.description}
            </p>
            <h3 className="text-lg font-secondary font-semibold">
              Contact Email
            </h3>
            <p className="my-3 bg-orange-600 w-[350px] xl:pl-2 mx-auto py-2 text-white font-primary">
              {job?.company?.contactEmail}
            </p>
            <h3 className="text-lg font-secondary font-semibold">
              Contact Phone
            </h3>
            <p className="my-3 bg-orange-600 w-[350px] xl:pl-2  mx-auto py-2 text-white font-primary">
              {job?.company?.contactPhone}
            </p>
          </div>
          {/* CTA */}
          <div className="xl:shadow-xl py-3 px-4 w-full">
            <h2 className="text-xl text-center xl:text-left font-secondary font-semibold">
              Manage Job
            </h2>
            <div className="flex flex-col py-3 gap-3 rounded-sm">
              <Link to={`/jobs/edit/${id}`}>
                <button className="bg-orange-400 w-full xl:w-[350px] font-primary h-9 font-bold rounded-full text-white">
                  Edit Job
                </button>
              </Link>
              <Link>
                <button className="text-white bg-red-500 w-full xl:w-[350px] mx-auto xl:m-0 font-primary h-9 font-bold rounded-full">
                  Delete Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPage;
/* const jobLoader = async ({ params }) => {
  const res = await fetch(`api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}; */
