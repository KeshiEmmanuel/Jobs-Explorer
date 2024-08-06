import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import ViewAllButton from "../components/ViewAllButton";

export default function HomePage() {
  return (
    <section className="font-primary">
      <Hero />
      <JobListings isHome={true} />
      <ViewAllButton />
    </section>
  );
}
