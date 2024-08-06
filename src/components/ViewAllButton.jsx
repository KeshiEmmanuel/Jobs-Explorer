import { Link } from "react-router-dom";

function ViewAllButton() {
  return (
    <section className="flex items-center justify-center py-7">
      <Link to={"/jobs"}>
        <button className="bg-gray-950 text-white w-[300px] h-[50px] rounded-lg">
          View All Jobs
        </button>
      </Link>
    </section>
  );
}

export default ViewAllButton;
