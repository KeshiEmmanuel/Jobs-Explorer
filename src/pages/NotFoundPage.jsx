import { Link } from "react-router-dom";
import DangerIcon from "../icons/DangerIcon";

export default function NotFoundPage() {
  return (
    <section className="pt-[200px]">
      <div className="flex items-center flex-col">
        <div className="p-2">
          <DangerIcon />
        </div>
        <h1 className="text-6xl font-semibold font-primary">404 Not Found!</h1>
        <p className="pt-2 font-primary text-lg">This page does not exist</p>
        <Link to={"/"} className="pt-3">
          <button className="bg-orange-400 py-2 px-4 rounded-md text-white font-primary">
            Go Back
          </button>
        </Link>
      </div>
    </section>
  );
}
